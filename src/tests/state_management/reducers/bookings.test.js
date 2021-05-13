import bookingsReducer from '../../../state_management/reducers/bookings'

test('Create a new booking', () => {
  const payload = {
    id: 'abc123',
    name: 'name',
    date: '1',
    room: '2',
    nights: '4'
  }

  const state = {
    bookings: [],
    selectedBooking: null
  }

  const action = {type: 'CREATE_BOOKING', payload}
  const result = bookingsReducer(state, action)

  expect(result).toEqual({
    ...state,
    bookings: [payload]
  })
})

test('Select a booking', () => {
  const state = {
    bookings: [],
    selectedBooking: null
  }

  const action = {type: 'SELECT_BOOKING', payload: 'abc123'}
  const result = bookingsReducer(state, action)

  expect(result).toEqual({
    bookings: [],
    selectedBooking: 'abc123'
  })
})