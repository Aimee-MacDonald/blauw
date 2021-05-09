import React from 'react'
import styled from 'styled-components'

const Bookings = () => {
  const bookings = [{
    name: 'Charlene',
    date: 20,
    room: 4,
    nights: 2
  }, {
    name: 'Aimée',
    date: 20,
    room: 5,
    nights: 1
  }, {
    name: 'Tim',
    date: 6,
    room: 24,
    nights: 5
  }]

  return(
    <StyledBookings>
      {bookings.map(booking => (
        <StyledBooking
          date={booking.date}
          room={booking.room}
          nights={booking.nights}
        >{booking.name}</StyledBooking>))}
    </StyledBookings>
  )
}

const StyledBookings = styled.div`
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows:repeat(30, 1fr);
`

const StyledBooking = styled.div`
  background-color: cornflowerblue;
  grid-column-start: ${props => props.date};
  grid-column-end: ${props => props.date + props.nights};
  grid-row-start: ${props => props.room};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.1rem
`

export default Bookings