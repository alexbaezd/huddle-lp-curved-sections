import React from 'react'
import styled from "styled-components"

import ServicesData from "../content/data.json"
import Wave from './wave'

const SectionService = styled.section`
  padding:1rem 0;
  margin:0;
`
const Service = styled.article`
  background:${props => (props.blue ? "hsl(207, 100%, 98%)" : "none")};
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.blue ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-wrap: wrap-reverse;
  height: 65vh;
  
  @media (min-width: 768px) {
    height: 45vh;
  }
`
const Information = styled.article`
  max-width:450px;
`

const Title = styled.h2`
    font-size:1.5rem;
    text-align:center;
    margin-bottom:1rem;

  @media (min-width:768px){
    font-size:3vmin;
    text-align:left;
  }
`

const Description = styled.p`
  line-height:1.5;
  text-align:center;

  @media (min-width:768px){
  text-align:justify;
  }
`
const Image = styled.img`
  width:250px;
  margin-bottom:2.5rem;
  
  @media (min-width:768px){
    width:350px;
    margin-bottom:0;
  }
`
const WaveTop = styled.div`
  margin-bottom: -50px;
`
const WaveBottom  = styled.div`
  margin-top: -50px;
  transform: rotate(180deg);
` 

const Services = () => {

  

  return (
    <SectionService>

      {ServicesData.data.map((service, index) => {
        
        const isBlue = index % 2 === 0 ? true : false
        
        return (
          <div key={service.id}>
            {isBlue && (
              <WaveTop>
                <Wave colorFill="hsl(207, 100%, 98%)" />
              </WaveTop>
            )}
            <Service blue={isBlue}>
              <Wrapper blue={isBlue}>
                <Information>
                  <Title>{service.title}</Title>
                  <Description>{service.description}</Description>
                </Information>
                <Image
                  src={require(`../images/${service.image}`)}
                  alt={service.title}
                />
              </Wrapper>
            </Service>
            {isBlue && (
              <WaveBottom>
                <Wave colorFill="hsl(207, 100%, 98%)" />
              </WaveBottom>
            )}
          </div>
        )
      })}
    </SectionService>
  )
}

export default Services
