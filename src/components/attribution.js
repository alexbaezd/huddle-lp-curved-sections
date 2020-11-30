import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

const Texts = styled.p`
  text-align: center;
  & a {
    color: white;
    text-decoration: none;
    padding: 0 0.2rem;
    font-weight: bold;
    transition:0.4s;
  }
  & a:hover {
    color: hsl(322, 100%, 66%);
  }
`

const Attribution = ({author,urlAuthor}) => (
    <Texts>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      © {new Date().getFullYear()}&nbsp;Coded by
      <a href={urlAuthor} target="_blank" rel="noopener noreferrer">
        {author}
      </a>
      .
    </Texts>
  )

Attribution.propTypes ={
  author: PropTypes.string.isRequired,
  urlAuthor:PropTypes.string.isRequired
}



export default Attribution
