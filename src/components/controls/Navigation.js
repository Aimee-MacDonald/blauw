import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {BsLockFill, BsFillUnlockFill} from 'react-icons/bs'

import {toggleControl, toggleControlLock} from '../../state_management/actions/controls'
import {setMain} from '../../state_management/actions/navigation'

export const Navigation = props => (
  <StyledNavigation {...props}
    onMouseEnter={() => props.dispatch(toggleControl('left'))}
    onMouseLeave={() => props.dispatch(toggleControl('left'))}
  >
    
    {props.open && <button onClick={() => props.dispatch(toggleControlLock('left'))}>{props.locked ? <BsFillUnlockFill/> : <BsLockFill/>}</button>}
    
    {props.open && (
      <div>
        <button onClick={() => props.dispatch(setMain('bookingSheet'))}>Booking Sheet</button>
        <button onClick={() => props.dispatch(setMain('checkout'))}>Checkout</button>
        <button onClick={() => props.dispatch(setMain('stock'))}>Stock</button>
        <button onClick={() => props.dispatch(setMain('notes'))}>Notes</button>
        <button onClick={() => props.dispatch(setMain('editRoomsList'))}>Edit Rooms List</button>
      </div>
    )}
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

const mapStateToProps = ({controls}) => ({
  open: controls.left.open,
  locked: controls.left.locked
})

export default connect(mapStateToProps)(Navigation)