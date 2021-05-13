import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {selectBooking} from '../../../state_management/actions/bookings'

const Bookings = props => {
  return(
    <StyledBookings>
      {props.bookings.map(({id, name, date, room, nights}) => (
        <StyledBooking
          key={id}
          date={date}
          room={room}
          nights={nights}
          onClick={() => props.dispatch(selectBooking(id))}
          selected={props.selectedBooking === id ? true : false}
        >{name}</StyledBooking>))}
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
  background-color: ${props => props.selected ? 'orangered' : 'cornflowerblue'};
  grid-column-start: ${props => props.date};
  grid-column-end: ${props => props.date + props.nights};
  grid-row-start: ${props => props.room};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.1rem;
  transition: 0.4s;
  cursor: pointer;
`

const mapStateToProps = ({bookings}) => bookings
export default connect(mapStateToProps)(Bookings)