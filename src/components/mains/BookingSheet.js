import React from 'react'
import styled from 'styled-components'

import Dates from './booking_sheet/Dates'

const BookingSheet = () => (
  <StyledBookingSheet>
    <Dates/>
  </StyledBookingSheet>
)

const StyledBookingSheet = styled.div`
  background-color: lightblue;
`

export default BookingSheet