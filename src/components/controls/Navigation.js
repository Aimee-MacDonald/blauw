import React from 'react'
import styled from 'styled-components'

const Navigation = () => (
  <StyledNavigation>
    <h1>Navigation</h1>
  </StyledNavigation>
)

const StyledNavigation = styled.nav`
  background-color: yellow;
  width: 16rem;
  height: 100vh;
  overflow-x: hidden;
`

export default Navigation