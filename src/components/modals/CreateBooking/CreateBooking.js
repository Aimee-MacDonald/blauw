import React from 'react'
import styled from 'styled-components'

import AccommodationDetails from './AccommodationDetails'

export const CreateBooking = () => (
  <StyledCreateBooking>
    <h1>Create Booking</h1>

    <div id='labeled_booking_name'>
      <label htmlFor='booking_name'>Booking Name</label>
      <input id='booking_name'/>
    </div>

    <AccommodationDetails/>

    <div id='labeled_notes'>
      <label htmlFor='notes'>Notes</label>
      <textarea/>
    </div>

    <div id='formControls'>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  </StyledCreateBooking>
)

const StyledCreateBooking = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  h1{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #labeled_booking_name{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
  }

  #labeled_notes{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-flow: nowrap column;

    textarea{
      width: 100%;
    }
  }

  #formControls{
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
  }
`

export default CreateBooking