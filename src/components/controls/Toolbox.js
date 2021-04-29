import React from 'react'
import styled from 'styled-components'

const Toolbox = props => (
  <StyledToolbox
    open={props.open}
    onMouseEnter={props.toggleOpen}
    onMouseLeave={props.toggleOpen}
  >
    {props.open && <h1>Toolbox</h1>}
  </StyledToolbox>
)

const StyledToolbox = styled.nav`
  background-color: ${props => props.open ? 'pink' : 'transparent'};
  width: ${props => props.open ? 16 : 0.4}rem;
  height: 96vh;
  overflow-x: hidden;
  transition: 0.4s;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  padding: 1rem;
  box-shadow: ${props => props.open ? '-0.2rem 0 1rem 0 #248' : 0};
`

export default Toolbox