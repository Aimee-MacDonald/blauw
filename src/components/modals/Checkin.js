import React from 'react'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'
import {checkIn} from '../../state_management/actions/bookings'
import {getSelectedBooking} from '../../state_management/selectors/bookings'

export const Checkin = props => {
  const checkBookingIn = () => {
    props.dispatch(checkIn(props.booking._id))
    props.dispatch(setModal())
    // Check in on server as well
  }

  return(
    <div>
      <h1>Check this booking in?</h1>
      <button onClick={checkBookingIn}>Yes</button>
      <button onClick={() => props.dispatch(setModal())}>No</button>
    </div>
  )
}

const mapStateToProps = ({bookings}) => ({
  booking: getSelectedBooking(bookings)
})

export default connect(mapStateToProps)(Checkin)