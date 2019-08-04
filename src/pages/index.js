import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Avatar from "../components/avatar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{fontSize: "1.2em"}}>
      <select>
        <option>
          25-26 ก.ค.​ แถลงนโยบาย
        </option>
      </select>
    </div>
    <div style={{borderBottom: "1px dotted black"}}>
      <h2>สถิติต่างๆ</h2>
    </div>
    <div>
      <div>
        <input type="text" placeholder="ค้นหาจากชื่อ"/>
      </div>
      <div>
        <h2>25 กรกฏาคม 2562</h2>
        <ul>
          <li><Avatar/>นายพูดเก่ง ชอบอภิปราย</li>
          <li><Avatar/>นายชอบ ประถ้วง</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
