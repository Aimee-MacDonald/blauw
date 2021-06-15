import React from 'react'

import AccommodationDetails from './AccommodationDetails'

export const CreateBooking = () => (
  <div>
    <h1>Create Booking</h1>

    <label htmlFor='booking_name'>Booking Name</label>
    <input id='booking_name'/>

    <AccommodationDetails/>

    <label htmlFor='notes'>Notes</label>
    <textarea/>

    <button>Save</button>
    <button>Cancel</button>
  </div>
)

export default CreateBooking