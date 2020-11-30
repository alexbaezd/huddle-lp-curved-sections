import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'

import phone from "../images/icon-phone.svg"
import gmail from "../images/icon-email.svg"

const ListContact = styled.ul`
  margin:0.5rem 0;
  padding:0;
  list-style:none;
`
const ItemContact = styled.li`
  margin-bottom:0.7rem;
  font-size:0.9rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`
const ItemIcon = styled.img`
  width:16px;
  height:14px;
  margin-right:0.5rem;
`
const ItemLink = styled.a`
  color:white;
  text-decoration:none;
`

const Contact = ({phoneNumber, email}) =>  (
    <ListContact>
      <ItemContact>
        <ItemIcon
          src={phone}
          alt="Phone Number"
          target="_blank"
          rel="noreferrer"
        />
        Phone: <ItemLink href={`tel:${phoneNumber}`}>{phoneNumber}</ItemLink>
      </ItemContact>
      <ItemContact>
        <ItemIcon src={gmail} alt="Email" />
        <ItemLink
          href={`mailto:${email}?subject=Mail from Hunddle`}
          target="_blank"
          rel="noreferrer"
        >
          {email}
        </ItemLink>
      </ItemContact>
    </ListContact>
  )

Contact.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  email:PropTypes.string.isRequired
}

export default Contact
