import React from 'react'
import styled from 'styled-components'

import Navigation from './controls/Navigation'
import Toolbox from './controls/Toolbox'

export default class ControlLayer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      flaps: {
        left: {
          open: false
        },
        right: {
          open: false
        }
      }
    }
  }

  render(){
    return(
      <StyledControlLayer>
        <Navigation open={this.state.flaps.left.open} toggleOpen={() => this.toggleFlap('left')} />
        <Toolbox open={this.state.flaps.right.open} toggleOpen={() => this.toggleFlap('right')} />
      </StyledControlLayer>
    )
  }

  toggleFlap(orientation){
    if(orientation === 'left'){
      this.setState(prevState => ({
        flaps: {
          ...prevState.flaps,
          left: {
            open: !prevState.flaps.left.open
          }
        }
      }))
    } else if(orientation === 'right'){
      this.setState(prevState => ({
        flaps: {
          ...prevState.flaps,
          right: {
            open: !prevState.flaps.right.open
          }
        }
      }))
    }
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