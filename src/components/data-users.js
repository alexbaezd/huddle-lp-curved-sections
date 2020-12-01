import React , {useState}from 'react'
import styled ,{keyframes }  from "styled-components"
import AnimatedNumber from "animated-number-react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import { Container } from './design/helpers'

import iconCommunities from "../images/icon-communities.svg"
import iconMessages from "../images/icon-messages.svg"


const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`

const SectionNumbers = styled.section`
  display: flex;
  align-items: center;
  flex-direction:column;
  transition: 0.5s linear;
  height: auto;
  margin-top:3rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction:row;
    justify-content: space-evenly;
    padding:2.4rem 0;
  }
`
const Item = styled.div`
  animation: 1s ${fadeIn} linear;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`
const Icon = styled.img`
  width:32px;
  height:32px;
`
const Number = styled(AnimatedNumber)`
  font-size: 3.5rem;
  font-weight: 700;
  padding-top: 0rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`
const Description = styled.p`
  color: hsl(192, 100%, 9%);
  text-align:center;
  font-size:0.9rem;
`


const Users = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [communities] = useState({ value: 1.4, duration: 600 })
  const [messagesSent] = useState({ value: 2.7, duration: 900 })


  useScrollPosition(
    ({currPos }) => {
      if (currPos.y > 450) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    },
    [hasScrolled],
    null,
    true,
    300
  )



  return (
    <Container>
      <SectionNumbers>
        {hasScrolled && (
          <>
            <Item>
              <Icon src={iconCommunities} alt="icon-communities" />
              <Number
                value={communities.value}
                duration={communities.duration}
                formatValue={value => `${value.toFixed(1)}k+`}
              />
              <Description>Communities Formed</Description>
            </Item>
            <Item>
              <Icon src={iconMessages} alt="icon-Message" />
              <Number
                value={messagesSent.value}
                duration={messagesSent.duration}
                formatValue={value => `${value.toFixed(1)}m+`}
              />
              <Description>Messages Sent</Description>
            </Item>
          </>
        )}
      </SectionNumbers>
    </Container>
  )
}

export default Users
