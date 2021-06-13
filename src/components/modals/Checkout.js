import React, {useContext} from 'react'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../../util/ServerConnection'

import {checkOut} from '../../state_management/actions/bookings'
import {setModal} from '../../state_management/actions/modal'
import {getSelectedBooking} from '../../state_management/selectors/bookings'

export const Checkout = props => {
  const server = useContext(ServerConnectionContext)

  const checkBookingOut = bookingId => {
    props.dispatch(checkOut(bookingId))
    server.dispatch({reducer: 'bookings', action: checkOut(bookingId)})
    props.dispatch(setModal())
  }

  return(
    <div>
      <h1>Check this booking out?</h1>
      <button onClick={() => checkBookingOut(props.booking._id)}>Yes</button>
      <button onClick={() => props.dispatch(setModal())}>No</button>
    </div>
  )
}

const mapStateToProps = ({bookings}) => ({booking: getSelectedBooking(bookings)})

export default connect(mapStateToProps)(Checkout)