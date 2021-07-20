import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {getRoomDetails, getRoomOptions} from '../../../state_management/selectors/rooms'

export const AccommodationDetails = props => {
  const setGuestName = (roomIndex, guestIndex, guestName) => {
    props.editGuestDetails(roomIndex, guestIndex, {
      ...props.rooms[roomIndex].guests[guestIndex],
      name: guestName
    })
  }


  const setGuestArrival = (roomIndex, guestIndex, guestArrival) => {
    props.editGuestDetails(roomIndex, guestIndex, {
      ...props.rooms[roomIndex].guests[guestIndex],
      arrival: guestArrival
    })
  }

  const setGuestDeparture = (roomIndex, guestIndex, guestDeparture) => {
    props.editGuestDetails(roomIndex, guestIndex, {
      ...props.rooms[roomIndex].guests[guestIndex],
      departure: guestDeparture
    })
  }

  return(
    <StyledAccommodationDetails>
      <p>Room</p>
      <p>Guests</p>
      <p>Arrival</p>
      <p>Departure</p>
      <p>Nights</p>
      <p>Price</p>

      {props.rooms && props.rooms.map(room => (
        <StyledRoomDetails key={room.index}>
          <select onChange={e => props.selectRoomOption(e.target.value)}>
            <option>Select Room</option>
            {getRoomOptions(props.stateRooms).map(roomOption => (
              <option key={roomOption._id} value={roomOption._id}>{roomOption.name}</option>
            ))}
          </select>

          {room.guests.map((guest, index) => (
            <StyledGuestDetails key={`${guest}_${index}`}>
              <input
                value={guest.name}
                onChange={e => setGuestName(room.index, index, e.target.value)}
              />

              <input
                type='date'
                value={guest.arrival}
                onChange={e => setGuestArrival(room.index, index, e.target.value)}
              />

              <input
                type='date'
                value={guest.departure}
                onChange={e => setGuestDeparture(room.index, index, e.target.value)}
              />

              <p>{guest.nights}</p>
              <p>{`R ${guest.price}`}</p>
            </StyledGuestDetails>
          ))}
        </StyledRoomDetails>
      ))}

      <div id='addButtons'>
        <button type='button' onClick={props.addRoom}>Add Room</button>
        {props.selectedRoom &&
          !!props.rooms[props.selectedRoom - 1].roomId &&
          props.rooms[props.selectedRoom - 1].guests.length < getRoomDetails(props.rooms[props.selectedRoom - 1].roomId, props.stateRooms).maxPax &&
          <button type='button' onClick={props.addGuest}>Add Guest</button>
        }
      </div>

      <p id='total'>Total: R</p>
    </StyledAccommodationDetails>
  )
}

const StyledAccommodationDetails = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width 64rem;
  text-align: center;

  #addButtons{
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: space-evenly;
  }

  #total{
    grid-column-start: 6;
  }
`

const StyledRoomDetails = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`

const StyledGuestDetails = styled.div`
  grid-column-start: 2;
  grid-column-end: 7;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

const mapStateToProps = ({rooms}) => ({stateRooms: rooms})

export default connect(mapStateToProps)(AccommodationDetails)