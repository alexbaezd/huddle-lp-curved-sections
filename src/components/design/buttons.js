import styled from "styled-components"

export const ButtonOutline = styled.button`
  border-radius: 25px;
  border: 1px solid hsl(322, 100%, 66%);
  background: transparent;
  color: hsl(322, 100%, 66%);
  padding: 0.3rem 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  font-size: 0.8rem;
  &:hover {
    background: hsl(322, 100%, 66%);
    color: white;
  }
  &:focus {
    outline: 0;
  }
  
  @media (min-width: 768px) {
    padding: 0.3rem 1rem;
    font-size: 1rem;
  }
`

export const ButtonPrimary = styled.button`
  border-radius: 25px;
  background: hsl(322, 100%, 66%);
  border: none;
  color: white;
  padding: 0.8rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s ease;
  min-height:50px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 0;
  }
  @media (min-width: 768px) {
    padding: 1rem 4rem; 
    font-size: 1rem;
  }
`

export const ButtonSubmit = styled.button.attrs({ type: "submit" })`
  border-radius: 5px;
  border: none;
  background: hsl(322, 100%, 66%);
  color: white;
  padding: 0.6rem 2.1rem;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  transition: 0.5s ease;
  cursor:pointer;
  &:hover {
    background: green;
    color: white;
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.8rem;
  }
`