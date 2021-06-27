import {createRoom, deleteRoom, updateRoom} from '../../../state_management/actions/rooms'

test(`Generate a 'Create Room' action`, () => {
  const action = createRoom({
    name: 'name',
    group: 'group',
    shared: false,
    maxPax: 2,
    price: 420
  })

  expect(action).toEqual({
    type: 'CREATE_ROOM',
    payload: {
      _id: expect.any(String),
      name: 'name',
      group: 'group',
      shared: false,
      maxPax: 2,
      price: 420
    }
  })
})

test(`Generate an ungrouped 'Create Room' action`, () => {
  const action = createRoom({
    name: 'name',
    group: '',
    shared: false,
    maxPax: 2,
    price: 420
  })

  expect(action).toEqual({
    type: 'CREATE_ROOM',
    payload: {
      _id: expect.any(String),
      name: 'name',
      group: 'ungrouped',
      shared: false,
      maxPax: 2,
      price: 420
    }
  })
})

test(`Generate a 'Delete Room' action`, () => {
  const action = deleteRoom('abcd1234')

  expect(action).toEqual({
    type: 'DELETE_ROOM',
    payload: 'abcd1234'
  })
})

test(`Generate an 'Update Room' action`, () => {
  const action = updateRoom({
    _id: 'abcd1234',
    name: 'name'
  })

  expect(action).toEqual({
    type: 'UPDATE_ROOM',
    payload: {
      _id: 'abcd1234',
      name: 'name'
    }
  })
})