import React, {useContext} from 'react'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../../util/ServerConnection'

import {deleteBooking} from '../../state_management/actions/bookings'
import {setModal} from '../../state_management/actions/modal'

const DeleteBooking = props => {
  const connection = useContext(ServerConnectionContext)

  return(
    <div>
      <h1>Delete this booking?</h1>
      <p>{props._id}</p>
      <button onClick={() => {
        props.dispatch(deleteBooking(props._id))
        connection.dispatch({reducer: 'bookings', action: deleteBooking(props._id)})
        props.dispatch(setModal())
      }}>Yes</button>
      <button onClick={() => props.dispatch(setModal())}>No</button>
    </div>
  )
}

export default connect()(DeleteBooking)