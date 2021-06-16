import roomsReducer from '../../../state_management/reducers/rooms'

test('Create a new room', () => {
  const state = []

  const action = {
    type: 'CREATE_ROOM',
    payload: {
      _id: '1234abcd',
      name: 'Room Name',
      group: 'Group Name',
      shared: false,
      maxPax: 2,
      price: 120
    }
  }

  const result = roomsReducer(state, action)

  expect(result).toEqual([{
    _id: '1234abcd',
    name: 'Room Name',
    group: 'Group Name',
    shared: false,
    maxPax: 2,
    price: 120
  }])
})

test('Delete a room', () => {
  const state = [{
    _id: '1234abcd',
    name: 'Room Name',
    group: 'Group Name',
    shared: false,
    maxPax: 2,
    price: 120
  }]

  const action = {
    type: 'DELETE_ROOM',
    payload: '1234abcd'
  }

  const result = roomsReducer(state, action)

  expect(result).toEqual([])
})

test(`Update a room's details`, () => {
  const state = [{
    _id: '1234abcd',
    name: 'Room Name',
    group: 'Group Name',
    shared: false,
    maxPax: 2,
    price: 120
  }]

  const action = {
    type: 'UPDATE_ROOM',
    payload: {
      _id: '1234abcd',
      shared: true
    }
  }

  const result = roomsReducer(state, action)

  expect(result).toEqual([{
    _id: '1234abcd',
    name: 'Room Name',
    group: 'Group Name',
    shared: true,
    maxPax: 2,
    price: 120
  }])
})