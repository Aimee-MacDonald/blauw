import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

import {toggleControl} from '../../state_management/actions/controls'
import {setMain} from '../../state_management/actions/mains'

const Navigation = props => (
  <StyledNavigation {...props}
    onMouseEnter={() => props.dispatch(toggleControl('left'))}
    onMouseLeave={() => props.dispatch(toggleControl('left'))}
  >
    {props.open && <button onClick={() => props.dispatch(setMain('bookingSheet'))}>Booking Sheet</button>}
    {props.open && <button onClick={() => props.dispatch(setMain('checkout'))}>Checkout</button>}
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
  display: flex;
  flex-flow: nowrap column;
`

const mapStateToProps = ({controls}) => ({
  open: controls.left.open
})

export default connect(mapStateToProps)(Navigation)