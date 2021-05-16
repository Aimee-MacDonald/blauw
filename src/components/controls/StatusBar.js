import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const StatusBar = props => (
  <StyledStatusBar {...props}>
    {!props.connected && <p>Unable to Connect to the Local Server</p>}
  </StyledStatusBar>
)

const StyledStatusBar = styled.div`
  position: fixed;
  width: 100%;
  height: ${props => !props.connected ? '1rem' : '0'};
  background-color: ${props => props.connected ? 'lime' : 'orangered'};
  transition: 0.4s;

  p{
    text-align: center;
  }
`

const mapStateToProps = ({util}) => ({...util})

export default connect(mapStateToProps)(StatusBar)