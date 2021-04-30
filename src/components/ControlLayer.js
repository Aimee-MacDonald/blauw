import React from 'react'
import styled from 'styled-components'

import Navigation from './controls/Navigation'
import Toolbox from './controls/Toolbox'

export default class ControlLayer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <StyledControlLayer>
        <Navigation/>
        <Toolbox/>
      </StyledControlLayer>
    )
  }
}

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