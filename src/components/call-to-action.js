import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

import {ButtonPrimary} from "../components/design/buttons"
import { Container } from './design/helpers'

const SectionCTA = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.8rem;
  margin-left: 1.8rem;
  height: 50vh;
  @media (min-width: 768px) {
    padding: 2rem 0;
    height: 40vh;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`


const CallToAction = ({title,buttonText}) => {

  const handleClick = () => console.log("Call To Action")

  return (
    <Container>
      <SectionCTA>
        <Title>{title}</Title>
        <ButtonPrimary onClick={handleClick}>{buttonText}</ButtonPrimary>
      </SectionCTA>
    </Container>
  )
}

CallToAction.defaultProps = {
  buttonText: `Click Me`,
}

CallToAction.propTypes = {
  title:PropTypes.string.isRequired,
  buttonText:PropTypes.string
}
export default CallToAction
