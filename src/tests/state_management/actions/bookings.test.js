import {createBooking, selectBooking} from '../../../state_management/actions/bookings'

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
    payload: {...bookingData, id: `d${bookingData.date}r${bookingData.room}n${bookingData.nights}`}
  })
})

test(`Generate a 'select booking' action`, () => {
  const action = selectBooking({id: 'abc123'})

  expect(action).toEqual({
    type: 'SELECT_BOOKING',
    payload: {id: 'abc123'}
  })
})