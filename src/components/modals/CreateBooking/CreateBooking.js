import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../../../util/ServerConnection'

import {setModal} from '../../../state_management/actions/modal'

import AccommodationDetails from './AccommodationDetails'

export const CreateBooking = props => {
  const defaultBookingDetails = {
    bookingName: '',
    rooms: [],
    bookingNotes: ''
  }

  const server = useContext(ServerConnectionContext)

  const [bookingDetails, setBookingDetails] = useState(defaultBookingDetails)
  const [selectedRoom, selectRoom] = useState(0)

  const editBookingName = e => {
    setBookingDetails({
      ...bookingDetails,
      bookingName: e.target.value
    })
  }

  const editBookingNotes = e => {
    setBookingDetails({
      ...bookingDetails,
      bookingNotes: e.target.value
    })
  }

  const addRoom = () => {
    setBookingDetails({
      ...bookingDetails,
      rooms: [
        ...bookingDetails.rooms,
        {
          index: bookingDetails.rooms.length,
          roomId: undefined,
          guests: []
        }
      ]
    })

    selectRoom(bookingDetails.rooms.length + 1)
  }

  const selectRoomOption = roomId => {
    setBookingDetails({
      ...bookingDetails,
      rooms: bookingDetails.rooms.map(room => {
        return room.index !== selectedRoom - 1 ? room : {
          ...room,
          roomId
        }
      })
    })
  }

  const addGuest = () => {
    setBookingDetails({
      ...bookingDetails,
      rooms: bookingDetails.rooms.map(room => {
        return room.index !== selectedRoom - 1 ? room : {
          ...room,
          guests: [
            ...room.guests,
            {
              name: '',
              arrival: '',
              departure: '',
              nights: 0
            }
          ]
        }
      })
    })
  }

  const editGuestDetails = (roomIndex, guestIndex, guestDetails) => {
    setBookingDetails({
      ...bookingDetails,
      rooms: bookingDetails.rooms.map(room => {
        return room.index !== roomIndex ? room : {
          ...room,
          guests: room.guests.map((guest, index) => {
            return index !== guestIndex ? guest : {
              ...guest,
              ...guestDetails
            }
          })
        }
      })
    })
  }

  const saveBooking = e => {
    e.preventDefault()

    console.log('Save Booking')
    console.log(bookingDetails)

    //server.dispatch()

    props.dispatch(setModal())
  }

  return(
    <StyledCreateBooking onSubmit={saveBooking}>
      <h1>Create Booking</h1>

      <div id='labeled_booking_name'>
        <label htmlFor='booking_name'>Booking Name</label>
        <input
          id='booking_name'
          value={bookingDetails.bookingName}
          onChange={editBookingName}
        />
      </div>

      <AccommodationDetails
        addRoom={addRoom}
        addGuest={addGuest}
        rooms={bookingDetails.rooms}
        selectedRoom={selectedRoom}
        selectRoom={selectRoom}
        selectRoomOption={selectRoomOption}
        editGuestDetails={editGuestDetails}
      />

      <div id='labeled_notes'>
        <label htmlFor='notes'>Notes</label>
        <textarea
          id='booking_notes'
          value={bookingDetails.bookingNotes}
          onChange={editBookingNotes}
        />
      </div>

      <div id='formControls'>
        <button type='reset' onClick={() => props.dispatch(setModal())}>Cancel</button>
        <button type='submit'>Save</button>
      </div>
    </StyledCreateBooking>
  )
}

const StyledCreateBooking = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  h1{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  #labeled_booking_name{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
  }

  #labeled_notes{
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-flow: nowrap column;

    textarea{
      width: 100%;
    }
  }

  #formControls{
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
  }
`

export default connect()(CreateBooking)