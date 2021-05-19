import React from 'react'
import styled from 'styled-components'

import Dates from './Dates'
import Bookings from './Bookings'

const BookingSheet = () => (
  <StyledBookingSheet>
    <Dates/>
    <Bookings />
  </StyledBookingSheet>
)

const StyledBookingSheet = styled.div`
  background-color: indigo;
  width: 100%;
  height: 100%;
`

export default BookingSheet