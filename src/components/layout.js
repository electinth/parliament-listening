/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from '../shared/css/globalStyles'

import "./layout.css"
import Header from "./header";
import consoleMSG from "../message"

const Layout = ({ children }) => {
  const titleStr = `แอบฟังเสียงรัฐสภา (เวอร์ชั่นทดสอบ)`

  console.log(consoleMSG)

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem 1.45rem`,
        }}
      >
        <h1>{titleStr}</h1>
        <main>{children}</main>
        <footer style={{textAlign: "center", marginTop: "20px"}}>
          © {new Date().getFullYear()}, Built with 
          {` `}
          ☕️💪⌚️
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
