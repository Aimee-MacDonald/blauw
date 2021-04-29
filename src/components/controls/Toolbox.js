import React from 'react'
import styled from 'styled-components'

const Toolbox = () => (
  <StyledToolbox>
    <h1>Toolbox</h1>
  </StyledToolbox>
)

const StyledToolbox = styled.nav`
  background-color: lightblue;
  width: 0.1rem;
  height: 100vh;
  overflow-x: hidden;
  transition: 0.2s;

  &:hover{
    width: 16rem;
  }
`

export default Toolbox