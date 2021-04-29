import React from 'react'
import styled from 'styled-components'

const Navigation = () => (
  <StyledNavigation>
    <h1>Navigation</h1>
  </StyledNavigation>
)

const StyledNavigation = styled.nav`
  background-color: yellow;
  width: 0.1rem;
  height: 100vh;
  overflow-x: hidden;
  transition: 0.2s;

  &:hover{
    width: 16rem;
  }
`

export default Navigation