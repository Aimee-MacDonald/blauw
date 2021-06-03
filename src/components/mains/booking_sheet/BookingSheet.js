import React, {useState} from 'react'
import styled from 'styled-components'

import Bookings from './Bookings'
import Dates from './Dates'
import RoomsList from './RoomsList'

const BookingSheet = () => {
  const [scrollOffsets, setScrollOffsets] = useState({x: 0, y: 0})
  const [mouseCoordinates, setMouseCoordinates] = useState({x: null, y: null})
  const [hoveredCell, setHoveredCell] = useState({x: null, y: null})

  const handleMouseMove = e => {
    setMouseCoordinates({x: e.clientX, y: e.clientY})
    if(mouseCoordinates.x < 256 || mouseCoordinates.y < 64){
      setHoveredCell({x: null, y: null})
    } else {
      setHoveredCell({
        x: parseInt((mouseCoordinates.x - 256 + scrollOffsets.x) / (window.innerWidth - 256) * ((window.innerWidth - 256) / 64)) + 1,
        y: parseInt((mouseCoordinates.y - 64 + scrollOffsets.y) / (window.innerHeight - 64) * ((window.innerHeight - 64) / 32)) + 1
      })
    }
  }

  return(
    <StyledBookingSheet onMouseMove={e => handleMouseMove(e)}>
      <Dates scroll={scrollOffsets.x} hoveredCell={hoveredCell.x}/>
      <RoomsList scroll={scrollOffsets.y} hoveredCell={hoveredCell.y}/>
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