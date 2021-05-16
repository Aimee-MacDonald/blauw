import React, {useContext} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../../util/ServerConnection'

import {setModal} from '../../state_management/actions/modal'
import {createBooking} from '../../state_management/actions/bookings'

const CreateBooking = props => {
  const connection = useContext(ServerConnectionContext)

  const saveBooking = e => {
    e.preventDefault()

    const bookingDetails = {
      name: e.target.name.value,
      date: parseInt(e.target.date.value),
      room: parseInt(e.target.room.value),
      nights: parseInt(e.target.nights.value)
    }

    const createBookingAction = createBooking(bookingDetails)

    props.dispatch(createBookingAction)
    connection.dispatch({reducer: 'bookings', action: createBookingAction})
    props.dispatch(setModal())
  }

  return(
    <StyledCreateBooking onSubmit={saveBooking}>
      <h1>Create Booking</h1>

      <label htmlFor='name'>Name:</label>
      <input id='name' />

      <label htmlFor='date'>Date:</label>
      <input id='date' />

      <label htmlFor='room'>Room:</label>
      <input id='room' />

      <label htmlFor='nights'>Nights:</label>
      <input id='nights' />
      
      <button type='reset' onClick={() => props.dispatch(setModal())}>Cancel</button>
      <button type='submit'>Save</button>
    </StyledCreateBooking>
  )
}

const StyledCreateBooking = styled.form`
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

export default connect()(CreateBooking)