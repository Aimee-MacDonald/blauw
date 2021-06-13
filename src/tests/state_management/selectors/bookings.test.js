import {getSelectedBooking} from '../../../state_management/selectors/bookings'

test('Return the selected booking object', () => {
  const state = {"bookings":[{"_id":"45bf890c-fba2-4c2c-aebb-14865d3e8399","booking_name":"Aimee","checkin_date":1623535200000,"room":4,"nights":4,"status":"confirmed","checked_in":false,"__v":0}],"selectedBooking":"45bf890c-fba2-4c2c-aebb-14865d3e8399"}
  const result = getSelectedBooking(state)
  
  expect(result).toEqual({
    _id: '45bf890c-fba2-4c2c-aebb-14865d3e8399',
    booking_name: 'Aimee',
    checkin_date: 1623535200000,
    room: 4,
    nights: 4,
    status: 'confirmed',
    checked_in: false,
    __v: 0
  })
})