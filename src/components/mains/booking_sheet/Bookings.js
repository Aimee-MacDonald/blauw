import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Bookings = ({bookings}) => {
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

const mapStateToProps = ({bookings}) => ({bookings})

export default connect(mapStateToProps)(Bookings)