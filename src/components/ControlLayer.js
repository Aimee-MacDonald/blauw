import React from 'react'
import styled from 'styled-components'

import StatusBar from './controls/StatusBar'
import Navigation from './controls/Navigation'
import Toolbox from './controls/Toolbox'

export const ControlLayer = () => (
  <StyledControlLayer>
    <StatusBar />
    <Navigation />
    <Toolbox />
  </StyledControlLayer>
)

const StyledControlLayer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100vw;
  height: 0;
  overflow: visible;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`

export default ControlLayer