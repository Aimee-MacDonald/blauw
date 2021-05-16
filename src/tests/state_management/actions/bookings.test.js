import {createBooking, deleteBooking, selectBooking} from '../../../state_management/actions/bookings'

test(`Generate a 'create booking' action`, () => {
  const bookingData = {
    name: 'name',
    date: '1',
    room: '2',
    nights: '4'
  }

  const booking = createBooking(bookingData)

  expect(booking).toEqual({
    type: 'CREATE_BOOKING',
    payload: {...bookingData, id: expect.any(String)}
  })
})

test(`Generate a 'select booking' action`, () => {
  const action = selectBooking({id: 'abc123'})

  expect(action).toEqual({
    type: 'SELECT_BOOKING',
    payload: {id: 'abc123'}
  })
})

test(`Generate a 'delete booking' action`, () => {
  const action = deleteBooking({id: 'abc123'})

  expect(action).toEqual({
    type: 'DELETE_BOOKING',
    payload: {id: 'abc123'}
  })
})