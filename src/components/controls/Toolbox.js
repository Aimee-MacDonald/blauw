import React from 'react'
import styled from 'styled-components'

const Toolbox = () => (
  <StyledToolbox>
    <h1>Toolbox</h1>
  </StyledToolbox>
)

const StyledToolbox = styled.nav`
  background-color: lightblue;
  width: 16rem;
  height: 100vh;
  overflow-x: hidden;
`

export default Toolbox