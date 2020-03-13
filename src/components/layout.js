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

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

const Layout = ({ children }) => {
  const titleStr = `แอบฟังเสียงรัฐสภา`

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
        <h1 css={{
          textAlign: "center",
          [media(DESKTOP_MIN_WIDTH)]: {
            textAlign: "left"
          }
        }}>
          {titleStr}
        </h1>
        <main>{children}</main>
        <footer style={{textAlign: "center", marginTop: "20px"}}>
          © {new Date().getFullYear()}. Built with
          {` `}
          ☕️💪⌚️.
          <p>Code is licensed under <a href="https://github.com/codeforthailand/parliament-listening/blob/master/LICENSE"> MIT License</a>.
          Data is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 License.</a></p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
