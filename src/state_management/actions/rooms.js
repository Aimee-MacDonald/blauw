import {v4} from 'uuid'

export const createRoom = roomData => ({
  type: 'CREATE_ROOM',
  payload: {
    _id: v4(),
    ...roomData
  }
})

export const deleteRoom = roomId => ({
  type: 'DELETE_ROOM',
  payload: roomId
})

export const updateRoom = roomData => ({
  type: 'UPDATE_ROOM',
  payload: roomData
})