import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'
import {createBooking} from '../../state_management/actions/bookings'

const CreateBooking = props => {
  const saveBooking = e => {
    e.preventDefault()

    props.dispatch(createBooking({
      name: e.target.name.value,
      date: parseInt(e.target.date.value),
      room: parseInt(e.target.room.value),
      nights: parseInt(e.target.nights.value)
    }))

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
  background-color: lime;
`

export default connect()(CreateBooking)