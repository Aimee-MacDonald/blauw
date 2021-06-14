import React, {useContext} from 'react'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'
import {undoCheckout} from '../../state_management/actions/bookings'
import {getSelectedBooking} from '../../state_management/selectors/bookings'
import {ServerConnectionContext} from '../../util/ServerConnection'

export const UndoCheckout = props => {
  const server = useContext(ServerConnectionContext)

  const undoBookingCheckout = () => {
    props.dispatch(undoCheckout(props.selectedBooking._id))
    server.dispatch({reducer: 'bookings', action: undoCheckout(props.selectedBooking._id)})
    props.dispatch(setModal())
  }

  return(
    <div>
      <h1>Undo Checkout</h1>
      <button onClick={() => props.dispatch(setModal())}>Cancel</button>
      <button onClick={undoBookingCheckout}>Undo Checkout</button>
    </div>
  )
}

const mapStateToProps = ({bookings}) => ({selectedBooking: getSelectedBooking(bookings)})

export default connect(mapStateToProps)(UndoCheckout)