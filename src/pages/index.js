import React, {useState, useEffect} from "react"

import axios from "axios"

import config from "../config"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatBox from "../components/stat-box"

import TopKList from "../components/top-k-list"
import DayList from "../components/day-list"
import PortionBar from "../components/portion-bar"
import PartyCard from "../components/party-card"
import TimeLabel from "../components/time-label";
import { withPrefix } from "gatsby";

const IndexPage = () => {
  const [dataset, setDataset] = useState(config.datasets[0])
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(withPrefix(dataset.file))
      setData(result.data)
    };
    fetchData();
  }, [dataset])

  return <Layout>
    <SEO title="Home" />
    <h2>
      <select style={{border: "0px", color: "#E1161F", background: "white"}}>
        {
          config.datasets.map(d => {
            return <option key={d.name} value={d.file}>{d.name}</option>
          })
        }
      </select>
    </h2>
    {
      data.statistics &&
      <>
        <div>
          <h2>สรุปเวลาการประชุม</h2>
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
                remark="สัดส่วนคำนวณจากเวลารวมของ ส.ส. ทั้งหมด"
              />
            </StatBox>
            <StatBox>
              <PortionBar
                leftLabel="อภิปราย" rightLabel="ประท้วง"
                leftDuration={data.statistics.total_debate_duration}
                rightDuration={data.statistics.total_opposing_duration}
                leftColor="#FFFFFF" rightColor="#000000"
                remark="สัดส่วนคำนวณจากเวลารวมของ ส.ส. และ ส.ว."
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
