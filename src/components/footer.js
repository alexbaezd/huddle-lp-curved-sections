import React from 'react'
import styled from "styled-components"

import { Container } from './design/helpers'
import SocialMediaIcons from './social-media'
import Contact from './contact-information'
import Attribution from './attribution'
import Newsletter from './newsletter'
import Wave from './wave'

import logoWhite from "../images/logo-white.svg"
import FooterYAMLData from "../content/footer.yaml"

const GroupFooter = styled.footer`
  background: hsl(192, 100%, 9%);
  color: hsl(207, 100%, 98%);
  padding: 2rem 1rem;
`
const Group = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  flex-direction: row-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items:flex-end;
  }
`
const Logo = styled.img`
  margin-bottom:1.5rem;
  width:180px;
`
const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0rem;
  }
`
const BrandDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`
const WaveContainer = styled.section`
  margin-bottom: -25px;
`


const Footer = () => {

  const { description ,phone, email, newsletter, buttonNewsletter } = FooterYAMLData

  return (
    <>
        <WaveContainer>
          <Wave colorFill="hsl(192, 100%, 9%)" />
        </WaveContainer>
        <GroupFooter>
          <Container>
          <Group>
            <GroupInfo>
              <Logo src={logoWhite} alt="Logo" />
              <BrandDescription>{description}</BrandDescription>
              <Contact phoneNumber={phone} email={email} />
              <SocialMediaIcons />
            </GroupInfo>
            <GroupInfo>
              <Newsletter
                newsletter={newsletter}
                buttonNewsletter={buttonNewsletter}
              />
            </GroupInfo>
          </Group>
          <Attribution author="Alex Báez" urlAuthor="https://alexbaez.dev/" />
          </Container>
        </GroupFooter>
    </>
  )
}

export default Footer
