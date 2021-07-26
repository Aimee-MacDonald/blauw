import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {selectBooking} from '../../../state_management/actions/bookings'
import {shortenText} from '../../../util/util'
import {getRoomIndex} from '../../../state_management/selectors/rooms'

export const Bookings = props => (
  <StyledBookings
    id={'booking_sheet'}
    onScroll={e => props.setScrollOffsets({x: e.target.scrollLeft, y: e.target.scrollTop})}
    onClick={e => {if(e.target.id === 'booking_sheet') props.dispatch(selectBooking())}}
  >
    {props.bookings.bookings.map(booking => (
      booking.rooms.map(room => (
        <StyledBooking
          key={booking._id}
          dateIndex={(room.guests[0].arrival - props.dates.startDate) / 86400000 + 1}
          roomIndex={getRoomIndex(room.roomId, props.rooms)}
          nights={4}
          onClick={() => props.dispatch(selectBooking(booking._id))}
          selected={props.bookings.selectedBooking === booking._id}
        >
          {
            //shortenText(booking.booking_name, booking.nights * 8)
            booking.bookingName
          }
        </StyledBooking>
      ))
    ))}
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
  grid-row-start: ${props => props.roomIndex};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.1rem;
  transition: 0.4s;
  cursor: pointer;
`

const mapStateToProps = ({bookings, dates, rooms}) => ({bookings, dates, rooms})
export default connect(mapStateToProps)(Bookings)