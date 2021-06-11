import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {toggleControl, toggleControlLock} from '../../state_management/actions/controls'
import {setModal} from '../../state_management/actions/modal'
import {getMainsFlags} from '../../state_management/selectors/navigation'

export const Toolbox = props => (
  <StyledToolbox {...props}
    onMouseEnter={() => props.dispatch(toggleControl('right'))}
    onMouseLeave={() => props.dispatch(toggleControl('right'))}
  >
  
    {props.open && <button onClick={() => props.dispatch(toggleControlLock('right'))}>Lock</button>}

    {props.open && (
      <div>
        {props.navigation.bookingSheet && (
          <div>
            <button onClick={() => props.dispatch(setModal('createBooking'))}>Create Booking</button>
            {props.selectedBooking && <button onClick={() => props.dispatch(setModal('deleteBooking'))}>Delete Booking</button>}
            {props.selectedBooking && <button onClick={() => props.dispatch(setModal('editBooking'))}>Edit Booking</button>}
            {props.selectedBooking && <button onClick={() => props.dispatch(setModal('checkin'))}>Check In</button>}
            {props.selectedBooking && <button onClick={() => props.dispatch(setModal('checkout'))}>Check Out</button>}
          </div>
        )}

        {props.navigation.editRoomsList &&
        <div>
          <button>Add Room</button>
          <button>Remove Room</button>
          <button>Edit Room</button>
        </div>
        }
      </div>
    )}
  </StyledToolbox>
)

const StyledToolbox = styled.nav`
  background-color: ${props => props.open ? 'pink' : 'transparent'};
  width: ${props => props.open ? 16 : 0.4}rem;
  height: 96vh;
  overflow-x: hidden;
  transition: 0.4s;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  padding: 1rem;
  box-shadow: ${props => props.open ? '-0.2rem 0 1rem 0 #248' : 0};
`

const mapStateToProps = ({controls, navigation, bookings}) => ({
  open: controls.right.open,
  navigation : getMainsFlags(navigation),
  selectedBooking: bookings.selectedBooking
})

export default connect(mapStateToProps)(Toolbox)