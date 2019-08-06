import React, {useState, useEffect} from "react"

import axios from "axios"

import config from "../config"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TopKList from "../components/top-k-list"
import DayList from "../components/day-list"
import ControlBox from "../components/control-box"
import PortionBar from "../components/portion-bar"


const IndexPage = () => {
  const [dataset, setDataset] = useState(config.datasets[0])
  const [data, setData] = useState({})
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(dataset.file)
      setData(result.data)
    };
    fetchData();
  }, [dataset])

  return <Layout>
    <SEO title="Home" />
    <h2>
      {
        // @todo #2 style the selector acccording to the design
      }
      <select>
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
        <div style={{borderBottom: "1px dotted black"}}>
          <h2>สรุปเวลาการประชุม</h2>
          <div style={{width: "47.5%", marginRight: "2.5%", float: "left"}}>
            <PortionBar
              leftLabel="รัฐบาล" rightLabel="ฝ่ายค้าน"
              leftDuration={7200} rightDuration={8000}
              leftColor="#0E64B9" rightColor="#E1161F"
            />
          </div>
          <div style={{width: "47.5%", marginLeft: "2.5%", float: "left"}}>
            <PortionBar
              leftLabel="อภิปราย" rightLabel="ประท้วง"
              leftDuration={data.statistics.total_duration_no_chairman}
              rightDuration={data.statistics.total_opposing_duration}
              leftColor="#FFFFFF" rightColor="#000000"
            />
          </div>
          <div>เวลาที่ใช้ทั้งหมด {data.statistics.total_duration_no_chairman}</div>
          <div>เวลาประท้วงทั้งหมด {data.statistics.total_opposing_duration}</div>
          <TopKList title="พูดนานสุด" list={data.statistics.top_debaters}/>
          <TopKList title="ประท้วง" list={data.statistics.top_opposers}/>
        </div>
        <div>
          <ControlBox namePlaceholder={nameFilter}
            onNameSearch={(n) => setNameFilter(n)}
          />
          {
            data.dates.map(d => <DayList data={d} nameFilter={nameFilter}/>)
          }
        </div>
      </>

    }
  </Layout>
}

export default IndexPage
