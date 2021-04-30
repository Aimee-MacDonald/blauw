import React from 'react'
import styled from 'styled-components'

const Navigation = props => (
  <StyledNavigation {...props}
    onMouseEnter={props.toggleOpen}
    onMouseLeave={props.toggleOpen}
  >
    {props.open && <h1>Navigation</h1>}
  </StyledNavigation>
)

const StyledNavigation = styled.nav`
  background-color: ${props => props.open ? 'pink' : 'transparent'};
  width: ${props => props.open ? 16 : 0.4}rem;
  height: 96vh;
  overflow-x: hidden;
  transition: 0.4s;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 1rem;
  box-shadow: ${props => props.open ? '0.2rem 0 1rem 0 #248' : 0};
`

export default Navigation