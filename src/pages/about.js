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
