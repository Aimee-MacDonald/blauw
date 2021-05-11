import {createBooking} from '../../../state_management/actions/bookings'

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
    bookingData: {...bookingData}
  })
})