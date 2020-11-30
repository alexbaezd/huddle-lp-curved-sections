/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled ,{ createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"


const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size:1rem;
  }
  h1,h2,h3,h4{
    font-family: 'Poppins', sans-serif;
    margin:0;
  }
  p {
  margin:0;
  }
`
const Main = styled.main`
  margin:0 auto;
`


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
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
