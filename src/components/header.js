import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import {ButtonOutline} from "../components/design/buttons"

import logo from '../images/logo.svg'


const GroupHeader = styled.header`
  margin: 0 auto;
  max-width: 1240px;
  padding: 1.45rem 1.0875rem;
 
  
  & img {
    width: 90px;
  }

  @media (min-width: 375px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    & img {
      width: 120px;
    }
  }

  @media (min-width: 768px) {
    & img {
      width: 180px;
    }
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = ({ siteTitle }) => (
  <GroupHeader>
    <Nav>
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
      <ButtonOutline>Try it Free</ButtonOutline>
    </Nav>
  </GroupHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
