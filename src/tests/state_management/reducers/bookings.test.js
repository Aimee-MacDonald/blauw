import bookingsReducer from '../../../state_management/reducers/bookings'

test('Create a new booking', () => {
  const payload = {
    name: 'name',
    date: '1',
    room: '2',
    nights: '4'
  }

  const state = []
  const action = {type: 'CREATE_BOOKING', payload}
  const result = bookingsReducer(state, action)

  expect(result).toEqual([payload])
})