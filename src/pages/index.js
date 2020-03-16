import React, {useState, useEffect} from "react"

import axios from "axios"

import config from "../config"

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatBox from "../components/stat-box"

import { stateFromQueryParam, StringParam } from '../components/utils'

import TopKList from "../components/top-k-list"
import DayList from "../components/day-list"
import PortionBar from "../components/portion-bar"
import PartyCard from "../components/party-card"
import TimeLabel from "../components/time-label";
import { withPrefix } from "gatsby";

const IndexPage = () => {

  const [date, setDate] = stateFromQueryParam('date', StringParam)

  const [data, setData] = useState({})

  if(!date || !(date in config.dateToDataset)) {
    setDate(config.datasets[0].date)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(withPrefix(`/data/${date}.json`))
      setData(result.data)
    };
    fetchData();
  }, [date])

  return <Layout>
    <SEO title="Home" />
    <h2 css={{
      fontSize: "1.2rem",
      [media(DESKTOP_MIN_WIDTH)]: {
        fontSize: "2rem"
      }
    }}>
      <select
          css={{
            border: "0px", color: "#E1161F", background: "white",
            width: "100%",
            [media(DESKTOP_MIN_WIDTH)]: {
              width: "auto"
            }
          }}
          onChange={(e) => {
            setData({})
            setDate(e.target.value)
          }}
        >
        {
          config.datasets.map(d => {
            return <option key={d.name} value={d.date}>{d.name}</option>
          })
        }
      </select>
    </h2>
    {
      !data.statistics &&
      <div align="center">กำลังโหลดข้อมูล</div>
    }
    {
      data.statistics &&
      <>
        <div>
          <h2 style={{textAlign: "center"}}>
            สรุปเวลาการประชุม {` `}
          </h2>
          <h3 style={{textAlign: "center"}}>
            <TimeLabel duration={data.statistics.total_duration}/>
          </h3>
          <div>
            <StatBox>
              <PortionBar
                leftLabel="รัฐบาล" rightLabel="ฝ่ายค้าน"
                leftDuration={data.statistics.total_gov_team_duration}
                rightDuration={data.statistics.total_opposition_team_duration}
                leftColor="#0E64B9" rightColor="#E1161F"
                remark={config.dateToDataset[date].remark.gov_opposition_stats}
              />
            </StatBox>
            <StatBox>
              <PortionBar
                leftLabel="อภิปราย" rightLabel="ประท้วง"
                leftDuration={data.statistics.total_debate_duration}
                rightDuration={data.statistics.total_opposing_duration}
                leftColor="#FFFFFF" rightColor="#000000"
                remark={config.dateToDataset[date].remark.debating_opposing_stats}
              />
            </StatBox>
            <div style={{height: "1.5rem", width: "100%", clear: "both"}}></div>
            <StatBox>
              <PartyCard
                title={`พรรคอภิปรายเยอะที่สุด`}
                partyName={data.statistics.top_debate_party[0].party}
                duration={data.statistics.top_debate_party[0].duration}
              />
            </StatBox>
            <StatBox>
              <PartyCard
                title={`พรรคประท้วงเยอะที่สุด`}
                partyName={data.statistics.top_opposing_party[0].party}
                duration={data.statistics.top_opposing_party[0].duration}
              />
            </StatBox>
            <StatBox>
              <TopKList title="สายอภิปราย" list={data.statistics.top_debaters}/>
            </StatBox>
            <StatBox>
              <TopKList title="สายประท้วง" list={data.statistics.top_opposers}/>
            </StatBox>
            <div style={{
              clear: "both", width: "100%",
              height: "2px", background: "black"
              }}>
            </div>
          </div>
        </div>
        <div style={{marginTop: "20px"}}>
            <DayList data={data}/>
        </div>
      </>

    }
  </Layout>
}

export default IndexPage
