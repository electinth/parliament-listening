/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from '../shared/css/globalStyles'

import "./layout.css"
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
        <h1>{data.site.siteMetadata.title}</h1>
        <main>{children}</main>
        <footer>
          {
            // @todo #2 update footer
          }
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
