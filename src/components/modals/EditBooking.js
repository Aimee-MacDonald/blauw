import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../../util/ServerConnection'
import {formatDateForInput, normaliseDate} from '../../util/util'

import {updateBooking} from '../../state_management/actions/bookings'
import {setModal} from '../../state_management/actions/modal'

export const EditBooking = props => {
  const [bookingDetails, editBooking] = useState(props.bookingDetails)
  const connection = useContext(ServerConnectionContext)

  const saveBooking = e => {
    e.preventDefault()
    
    props.dispatch(updateBooking(bookingDetails))
    connection.dispatch({reducer: 'bookings', action: updateBooking(bookingDetails)})
    props.dispatch(setModal())
  }

  return(
    <StyledEditBooking onSubmit={saveBooking}>
      <h1>Edit Booking</h1>

      <label htmlFor='name'>Name:</label>
      <input id='name' value={bookingDetails.booking_name} onChange={e => editBooking({...bookingDetails, booking_name: e.target.value})}/>

      <label htmlFor='date'>Date:</label>
      <input
        id='date'
        value={formatDateForInput(bookingDetails.checkin_date)}
        onChange={e => editBooking({...bookingDetails, checkin_date: normaliseDate(e.target.value)})}
        type='date'
      />

      <label htmlFor='room'>Room:</label>
      <select id='room' value={bookingDetails.room} onChange={e => editBooking({...bookingDetails, room: parseInt(e.target.value)})}>
        {props.rooms.map((room, index) => <option value={index} key={room}>{`${room} - ${index}`}</option>)}
      </select>

      <label htmlFor='nights'>Nights:</label>
      <input id='nights' value={bookingDetails.nights} onChange={e => editBooking({...bookingDetails, nights: parseInt(e.target.value) || 0})}/>

      <button type='reset' onClick={() => props.dispatch(setModal())}>Cancel</button>
      <button type='submit'>Save</button>
    </StyledEditBooking>
  )
}

const StyledEditBooking = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.6rem;

  h1{
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom: 3.2rem;
    text-align: center;
  }

  label{
    text-align: right;
    margin-top: 0.4rem;
    padding-right: 0.8rem;
  }

  input{
    background-color: transparent;
    border: none;
    border-bottom 1px solid black;
    width: 75%;
    margin-top: 0.4rem;
  }

  button{
    padding: 0.4rem;
    margin: 3.2rem 0.1rem 0 0.2rem;
  }
`

const mapStateToProps = ({bookings, rooms}) => {
  return {
    bookingDetails: bookings.bookings.filter(booking => booking._id === bookings.selectedBooking)[0],
    rooms: rooms.map(({roomName}) => roomName)
  }
}

export default connect(mapStateToProps)(EditBooking)