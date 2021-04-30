import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import {toggleControl} from '../../state_management/actions/controls'

const Navigation = props => (
  <StyledNavigation {...props}
    onMouseEnter={() => props.dispatch(toggleControl('left'))}
    onMouseLeave={() => props.dispatch(toggleControl('left'))}
  >
    {props.open && <h1>Navigation</h1>}
  </StyledNavigation>
)

const StyledNavigation = styled.nav`
  background-color: ${props => props.open ? 'pink' : 'transparent'};
  width: ${props => props.open ? 16 : 0.4}rem;
  height: 96vh;
  overflow-x: hidden;
  transition: 0.4s;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 1rem;
  box-shadow: ${props => props.open ? '0.2rem 0 1rem 0 #248' : 0};
`

const mapStateToProps = state => ({
  open: state.controls.left.open
})

export default connect(mapStateToProps)(Navigation)