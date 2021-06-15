import React, {useState} from 'react'
import styled from 'styled-components'

export const AccommodationDetails = () => {
  const [rooms, setRooms] = useState([])
  const [selectedRoom, selectRoom] = useState()

  const addRoom = () => {
    setRooms([
      ...rooms, {
      name: `room_${rooms.length}`,
      guests: []
    }])

    selectRoom(`room_${rooms.length}`)
  }

  const addGuest = () => {
    setRooms(rooms.map(room => {
      if(room.name === selectedRoom){
        return{
          ...room,
          guests: [
            ...room.guests,
            {
              name: ''
            }
          ]
        }
      } else {
        return room
      }
    }))
  }

  return(
    <StyledAccommodationDetails>
      <p>Room</p>
      <p>Guests</p>
      <p>Arrival</p>
      <p>Departure</p>
      <p>Nights</p>
      <p>Price</p>

      {rooms.map(room => (
        <StyledRoomDetails>
          <select>
            <option>Room 1</option>
            <option>Room 2</option>
            <option>Room 3</option>
            <option>Room 4</option>
          </select>

          {room.guests.map(guest => (
            <StyledGuestDetails>
              <input/>
              <input type='date'/>
              <input type='date'/>
              <input/>
              <p>{`R ${guest.price}`}</p>
            </StyledGuestDetails>
          ))}
        </StyledRoomDetails>
      ))}

      <div id='addButtons'>
        <button type='button' onClick={addRoom}>Add Room</button>
        {selectedRoom && <button type='button' onClick={addGuest}>Add Guest</button>}
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

export default AccommodationDetails