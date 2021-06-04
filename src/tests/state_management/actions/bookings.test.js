import {createBooking, deleteBooking, selectBooking, updateBooking} from '../../../state_management/actions/bookings'

test(`Generate a 'create booking' action`, () => {
  const bookingData = {
    booking_name: 'name',
    checkin_date: '1',
    room: '2',
    nights: '4'
  }

  const booking = createBooking(bookingData)

  expect(booking).toEqual({
    type: 'CREATE_BOOKING',
    payload: {...bookingData, _id: expect.any(String)}
  })
})

test(`Generate a 'select booking' action`, () => {
  const action = selectBooking({_id: 'abc123'})

  expect(action).toEqual({
    type: 'SELECT_BOOKING',
    payload: {_id: 'abc123'}
  })
})

test(`Generate a 'delete booking' action`, () => {
  const action = deleteBooking({_id: 'abc123'})

  expect(action).toEqual({
    type: 'DELETE_BOOKING',
    payload: {_id: 'abc123'}
  })
})

test(`Generate an 'update booking' action`, () => {
  const action = updateBooking({
    _id: 'abc123',
    booking_name: 'name',
    checkin_date: '1',
    room: '2',
    nights: '4'
  })

  expect(action).toEqual({
    type: 'UPDATE_BOOKING',
    payload: {
      _id: 'abc123',
      booking_name: 'name',
      checkin_date: '1',
      room: '2',
      nights: '4'
    }
  })
})