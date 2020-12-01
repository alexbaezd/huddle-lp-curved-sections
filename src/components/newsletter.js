import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

import { useForm } from "../hooks/useForm" 
import { ButtonSubmit } from "./design/buttons"

const TitleNewsletter = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`
const TextNewsletter = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`
const FormNewsLetter = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: auto;

  @media (min-width: 768px) {
    justify-content: space-around;
    align-items: baseline;
  }
`
const InputEmail = styled.input`
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  border: none;
  color: hsl(192, 100%, 9%);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

  @media (min-width: 768px) {
    margin-right: 1rem;
    width: 200px;
  }
`

const Newsletter = ({ newsletter, buttonNewsletter }) => {
  
  const [formValue, handleInputChange, reset] = useForm({
    emailForNewsletter: "",
  })
  
  const { emailForNewsletter } = formValue

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValue)
    reset()
  }
  
  return (
    <>
      <TitleNewsletter>Newsletter</TitleNewsletter>
      <TextNewsletter>{newsletter}</TextNewsletter>
      <FormNewsLetter onSubmit={handleSubmit}>
          <InputEmail
            autoComplete="off"
            name="emailForNewsletter"
            value={emailForNewsletter}
            onChange={handleInputChange}
            type="email"
            required
          />
          <ButtonSubmit type="submit">{buttonNewsletter}</ButtonSubmit>
      </FormNewsLetter>
    </>
  )
}

Newsletter.propTypes = {
  newsletter: PropTypes.string.isRequired,
  buttonNewsletter: PropTypes.string.isRequired
}

export default Newsletter
