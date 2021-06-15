import React from 'react'
import styled from 'styled-components'

const CreateBooking = () => (
  <StyledCreateBooking>
    <h1>Create Booking</h1>

    <div id='labeled_booking_name'>
      <label htmlFor='booking_name'>Booking name:</label>
      <input id='booking_name'/>
    </div>

    <div id='accommodation_details'>
      <p>Room</p>
      <p>Guest</p>
      <p>Arrival</p>
      <p>Departure</p>
      <p>Nights</p>
      <p>Price</p>
    </div>

    <button>Add Room</button>
    <button>Add Guest</button>

    <p id='total'>Total: R</p>

    <textarea/>

    <div id='form_controls'>
      <button>Create Booking</button>
      <button>Cancel</button>
    </div>
  </StyledCreateBooking>
)

const StyledCreateBooking = styled.form`
  background-color: cornflowerblue;
  max-width 64rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;

  h1{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #labeled_booking_name{
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 1rem 0;
  }

  #accommodation_details{
    grid-column-start: 1;
    grid-column-end: 7;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    height: 8rem;
    justify-items: center;
    margin-top: 1rem;
  }

  #total{
    grid-column-start: 6;
    grid-column-end: 7;
    justify-self: center;
  }

  textarea{
    grid-column-start: 1;
    grid-column-end: 7;
    height: 8rem;
    margin: 1rem 0;
  }

  #form_controls{
    grid-column-start: 3;
    grid-column-end: 5;
  }
`

export default CreateBooking