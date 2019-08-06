import React, {useState, useEffect} from "react"

import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopKList from "../components/top_k_list"
import DayList from "../components/day_list"

const datasets = [
  {
    name: "(ยังไม่เสร็จ) 25-26 ก.ค. 2562 แถลงนโยบาย​ฯ",
    file: "/data/25-26-07-2019.json"
  }
]

// @todo #2 test pdd

const IndexPage = () => {
  const [dataset, setDataset] = useState(datasets[0])
  const [data, setData] = useState({})
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(dataset.file)
      setData(result.data)
    };
    fetchData();
  }, [dataset])

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNameFilter(event.target.value)
    }
  }

  return <Layout>
    <SEO title="Home" />
    <div style={{fontSize: "1.2em"}}>
      <select>
        {datasets.map(d => <option key={d.name} value={d.file}>{d.name}</option>)}
      </select>
    </div>
    {
      data.statistics &&
      <>
        <div style={{borderBottom: "1px dotted black"}}>
          <h2>สถิติต่างๆ</h2>
          <div>เวลาที่ใช้ทั้งหมด {data.statistics.total_duration_no_chairman}</div>
          <div>เวลาประท้วงทั้งหมด {data.statistics.total_opposing_duration}</div>
          <TopKList title="พูดนานสุด" list={data.statistics.top_debaters}/>
          <TopKList title="ประท้วง" list={data.statistics.top_opposers}/>
        </div>
        <div>
          <div>
            <input type="text" 
              defaultValue={nameFilter}
              placeholder="ค้นหาจากชื่อ"
              onKeyDown={onKeyDown}
            /> <i>(กด Enter เพื่อค้นหา)</i>
          </div>
          {
            data.dates.map(d => <DayList data={d} nameFilter={nameFilter}/>)
          }
        </div>
      </>

    }
  </Layout>
}

export default IndexPage
