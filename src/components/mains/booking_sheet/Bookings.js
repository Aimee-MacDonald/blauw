import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {selectBooking} from '../../../state_management/actions/bookings'

const Bookings = props => (
  <StyledBookings
    id={'booking_sheet'}
    onScroll={e => props.setScrollOffsets({x: e.target.scrollLeft, y: e.target.scrollTop})}
    onClick={e => {if(e.target.id === 'booking_sheet')props.dispatch(selectBooking())}}>

    {props.bookings.bookings.map(booking => (
      <StyledBooking
        key={booking._id}
        dateIndex={(booking.checkin_date - props.dates.startDate) / 86400000 + 1}
        room={booking.room}
        nights={booking.nights}
        onClick={() => props.dispatch(selectBooking(booking._id))}
        selected={props.bookings.selectedBooking === booking._id}
      >{booking.booking_name}</StyledBooking>))}
  </StyledBookings>
)

const StyledBookings = styled.div`
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(60, 64px);
  grid-template-rows: repeat(80, 32px);
  overflow-x: scroll;
  overflow-y: scroll;
`

const StyledBooking = styled.div`
  background-color: ${props => props.selected ? 'orangered' : 'cornflowerblue'};
  grid-column-start: ${props => props.dateIndex};
  grid-column-end: ${props => props.dateIndex + props.nights};
  grid-row-start: ${props => props.room};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.1rem;
  transition: 0.4s;
  cursor: pointer;
`

const mapStateToProps = ({bookings, dates}) => ({bookings: bookings, dates})
export default connect(mapStateToProps)(Bookings)