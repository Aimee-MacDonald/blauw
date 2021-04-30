import React from 'react'
import styled from 'styled-components'

import Navigation from './controls/Navigation'
import Toolbox from './controls/Toolbox'

const ControlLayer = () => (
  <StyledControlLayer>
    <Navigation/>
    <Toolbox/>
  </StyledControlLayer>
)

export default ControlLayer

const StyledControlLayer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 0;
  overflow: visible;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`