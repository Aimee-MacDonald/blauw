import React from 'react'
import styled from 'styled-components'

import Navigation from './controls/Navigation'
import Toolbox from './controls/Toolbox'

const ControlLayer = () => (
  <StyledControlLayer as='div'>
    <Navigation />
    <Toolbox />
  </StyledControlLayer>
)

const StyledControlLayer = styled.section`
  background-color: green;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 0;
  overflow: visible;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`

export default ControlLayer