import bookingsReducer from '../../../state_management/reducers/bookings'

test('Create a new booking', () => {
  const payload = {
    _id: 'abc123',
    booking_name: 'name',
    checkin_date: '1',
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
      _id: 'abc123',
      booking_name: 'name',
      checkin_date: '1',
      room: '2',
      nights: '4'
    }, {
      _id: '123abc',
      booking_name: 'name2',
      checkin_date: '1',
      room: '4',
      nights: '4'
    }],
    selectedBooking: 'abc123'
  }

  const action = {type: 'DELETE_BOOKING', payload: 'abc123'}
  const result = bookingsReducer(state, action)

  expect(result).toEqual({
    bookings: [{
      _id: '123abc',
      booking_name: 'name2',
      checkin_date: '1',
      room: '4',
      nights: '4'
    }],
    selectedBooking: null
  })
})

test('Update a booking', () => {
  const state = {bookings: [{
    _id: '123abc',
    booking_name: 'name',
    checkin_date: 1,
    room: 2,
    nights: 3
  }]}

  const action = {
    type: 'UPDATE_BOOKING',
    payload: {
      _id: '123abc',
      nights: 4
    }
  }

  const result = bookingsReducer(state, action)
  expect(result).toEqual({bookings: [{
    _id: '123abc',
    booking_name: 'name',
    checkin_date: 1,
    room: 2,
    nights: 4
  }]})
})

test('Check booking in', () => {
  const state = {bookings: [{
    _id: '123abc',
    booking_name: 'name',
    checkin_date: 1,
    room: 2,
    nights: 3,
    status: 'confirmed',
    checked_in: false
  }]}

  const action = {
    type: 'CHECKIN_BOOKING',
    payload: '123abc'
  }

  const result = bookingsReducer(state, action)
  
  expect(result).toEqual({
    bookings: [
      {
        _id: '123abc',
        booking_name: 'name',
        checkin_date: 1,
        room: 2,
        nights: 3,
        status: 'checked_in',
        checked_in: true
      }
    ]
  })
})

test('Check booking out', () => {
  const state = {bookings: [{
    _id: '123abc',
    booking_name: 'name',
    checkin_date: 1,
    room: 2,
    nights: 3,
    status: 'checked_in',
    checked_in: true
  }]}

  const action = {
    type: 'CHECKOUT_BOOKING',
    payload: '123abc'
  }

  const result = bookingsReducer(state, action)

  expect(result).toEqual( {
    bookings: [
      {
        _id: '123abc',
        booking_name: 'name',
        checkin_date: 1,
        room: 2,
        nights: 3,
        status: 'checked_out',
        checked_in: false
      }
    ]
  })
})