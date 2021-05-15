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

test('Delete a booking', () => {
  const state = {
    bookings: [{
      id: 'abc123',
      name: 'name',
      date: '1',
      room: '2',
      nights: '4'
    }, {
      id: '123abc',
      name: 'name2',
      date: '1',
      room: '4',
      nights: '4'
    }],
    selectedBooking: 'abc123'
  }

  const action = {type: 'DELETE_BOOKING', payload: 'abc123'}
  const result = bookingsReducer(state, action)

  expect(result).toEqual({
    bookings: [{
      id: '123abc',
      name: 'name2',
      date: '1',
      room: '4',
      nights: '4'
    }],
    selectedBooking: null
  })
})