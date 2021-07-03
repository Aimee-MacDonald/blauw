import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {BsLockFill, BsFillUnlockFill} from 'react-icons/bs'

import {toggleControl, toggleControlLock} from '../../state_management/actions/controls'
import {setModal} from '../../state_management/actions/modal'
import {getMainsFlags} from '../../state_management/selectors/navigation'
import {isToday} from '../../util/util'
import {getSelectedBooking} from '../../state_management/selectors/bookings'

export const Toolbox = props => (
  <StyledToolbox {...props}
    onMouseEnter={() => props.dispatch(toggleControl('right'))}
    onMouseLeave={() => props.dispatch(toggleControl('right'))}
  >
    
    {props.open && <button className='lockButton' onClick={() => props.dispatch(toggleControlLock('right'))}>{props.locked ? <BsFillUnlockFill/> : <BsLockFill/>}</button>}

    {props.open && (
      <div>
        {props.navigation.bookingSheet && (
          <div>
            <button onClick={() => props.dispatch(setModal('createBooking'))}>Create Booking</button>
            {props.selectedBooking && (
              <div>
                <button onClick={() => props.dispatch(setModal('deleteBooking'))}>Delete Booking</button>
                <button onClick={() => props.dispatch(setModal('editBooking'))}>Edit Booking</button>
                {isToday(props.selectedBooking.checkin_date) && !props.selectedBooking.checked_in && props.selectedBooking.status === 'confirmed' && <button onClick={() => props.dispatch(setModal('checkin'))}>Check In</button>}
                {props.selectedBooking.checked_in && <button onClick={() => props.dispatch(setModal('checkout'))}>Check Out</button>}
                {props.selectedBooking.status === 'checked_out' && <button onClick={() => props.dispatch(setModal('undoCheckout'))}>Undo Check Out</button>}
              </div>
            )}
          </div>
        )}

        {props.navigation.editRoomsList &&
          <div>
            <button onClick={() => props.dispatch(setModal('createRoom'))}>Add Room</button>
            <button onClick={() => props.dispatch(setModal('removeRoom'))}>Remove Room</button>
            <button onClick={() => props.dispatch(setModal('editRoom'))}>Edit Room</button>
          </div>
        }

        {props.navigation.notes &&
        <div>
          <button onClick={() => props.dispatch(setModal('createNote'))}>Add Note</button>
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

  .lockButton{
    background-color: transparent;
    border: none;
    float: left;
  }
`

const mapStateToProps = ({controls, navigation, bookings}) => {
  return{
    open: controls.right.open,
    locked: controls.right.locked,
    navigation : getMainsFlags(navigation),
    selectedBooking: getSelectedBooking(bookings)
  }
}

export default connect(mapStateToProps)(Toolbox)