import React from 'react'
import styled ,{keyframes}from "styled-components"

import {ButtonPrimary} from "../components/design/buttons"
import HeaderYAMLData from "../content/header.yaml"
import { Container } from './design/helpers'

const fadeIn = keyframes`
  0% {
    opacity:0;
    transform:translateY(200px);
  }
  50%{
    opacity:0.5;
  }
  100% {
    opacity:1;
    transform:translateY(0);
  }
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  margin: 3.5rem 1.5rem 0.5rem;
  animation: 1.2s ${fadeIn} ease;

  @media (min-width: 768px) {
    margin-top: 18rem;
    margin-bottom: 9rem;
  }
`
const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 5vmin;
  }
`
const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 0.89rem;
  
  @media (min-width: 768px) {
    width: 600px;
    font-size:1rem;
  }
`
const Image = styled.img`
  width: 95%;
  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 1000px;
    padding: 3rem 0;
  }
`

const Hero = () => {
  const { title, description, callToAction, image } = HeaderYAMLData
  const handleClick = () => console.log("Call To Action")

  return (
    <Container>
      <MainSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonPrimary onClick={handleClick}>{callToAction}</ButtonPrimary>
        <Image src={require(`../images/${image}`)} alt="screen-mockups" />
      </MainSection>
    </Container>
  )
}

export default Hero
