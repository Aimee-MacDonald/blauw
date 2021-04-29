import React from 'react'
import styled from 'styled-components'

const MainLayer = () => (
  <StyledMainLayer as='div'>
    <h1>Main Layer</h1>
  </StyledMainLayer>
)

const StyledMainLayer = styled.section`
  background-color: red;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MainLayer