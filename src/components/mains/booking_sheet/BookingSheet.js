import React, {useState} from 'react'
import styled from 'styled-components'

import Bookings from './Bookings'
import Dates from './Dates'
import Rooms from './Rooms'

const BookingSheet = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({x: null, y: null})
  const [scrollOffsets, setScrollOffsets] = useState({x: 0, y: 0})

  return(
    <StyledBookingSheet onMouseMove={e => setMouseCoordinates({x: e.clientX, y: e.clientY})}>
      <Dates scroll={scrollOffsets.x}/>
      <Rooms scroll={scrollOffsets.y}/>
      <Bookings setScrollOffsets={setScrollOffsets}/>
    </StyledBookingSheet>
  )
}

const StyledBookingSheet = styled.div`
  background-color: indigo;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 64px 1fr;
`

export default BookingSheet