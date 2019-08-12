import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { contributors } from "../models/information"

const renderPerson = a =>
  a.url ? (
    <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
      {a.name}
    </a>
  ) : (
    a.name
  )

const ContributorSection = ({ name, contributors }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      {contributors
      .map(a => renderPerson(a))
      .reduce((prev, curr) => [prev, ", ", curr])}
    </div>
  )
}

const GroupedContributorSection = ({ name, contributors }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      {contributors.map(({ date, persons}) => {
        return (
          <div>
            - {date}: {persons
                .map(a => renderPerson(a))
                .reduce((prev, curr) => [prev, ", ", curr])}
          </div>
        )
      })}
    </div>
  )
}

const AboutPage = () => (
  <Layout>
    <SEO title="เกี่ยวกับ Parliament Listening" />
    <h2>เกี่ยวกับ Parliament Listening</h2>
    <p>
      หลังเลือกตั้งและจัดตั้งครม. ก็เริ่มมีการประชุมสภาเกิดขึ้นหลายครั้ง แต่ละครั้งใช้เวลานานและมีหลายประเด็นเกิดขึ้นในระหว่างการประชุม
      ELECT จึงได้ทดลองพัฒนาแพลตฟอร์มให้เลือกดูประชุมสภาย้อนหลังกันง่ายๆ โดยในเวอร์ชั่นทดสอบ สามารถดูสถิติภาพรวมและเลือกดูรายบุคคลได้
      และในเวอร์ชั่นต่อๆ ไป คาดว่าจะเพิ่มเติมข้อมูลจากการประชุมครั้งอื่นๆ พร้อมเพิ่มตัวเลือกต่างๆ
      รวมถึงไฮไลท์ของการประชุมแต่ละครั้ง เพื่อให้ดูย้อนหลังได้ว่า <b>"ใครเคยพูดอะไรไว้บ้าง"</b>
    </p>
    <h2>อาสาสมัครที่ร่วมพัฒนา</h2>
    <div id="contributors">
      <ContributorSection
        name="เขียนโปรแกรม 💻"
        contributors={contributors.coders}
      />
      <GroupedContributorSection
        name="ผู้บันทึกเวลา ⌛"
        contributors={contributors.annotators}
      />
      <ContributorSection
        name="ออกแบบ 🎨"
        contributors={contributors.designers}
      />
      <ContributorSection
        name="ติดต่อประสานงาน และด้านอื่นๆ ☎️"
        contributors={contributors.others}
      />
    </div>
  </Layout>
)

export default AboutPage
