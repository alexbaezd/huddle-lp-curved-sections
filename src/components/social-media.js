import React from 'react'
import styled from "styled-components"

import dataSocialLink from "../content/data.json"

const GroupSocialMedia = styled.section`
  display:flex;
  align-items:center;
  margin-top:2rem;
`

const Icon = styled.img`
  width:28px;
  height:28px;
  padding:0.5rem;
`

const SocialMediaIcons = () => {

  const {socialMedia} = dataSocialLink

  return (
    <GroupSocialMedia>
      {socialMedia.map(social => (
        <a key={social.id} href={social.url}>
          <Icon src={require(`../images/icon-${social.name}.svg`)} alt={social.name}/>
        </a>
      ))}
    </GroupSocialMedia>
  )
}

export default SocialMediaIcons
