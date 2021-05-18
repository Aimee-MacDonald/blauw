import {v4} from 'uuid'

export const createBooking = bookingData => ({
  type: 'CREATE_BOOKING',
  payload: {
    ...bookingData,
    id: v4()
  }
})

export const selectBooking = bookingId => ({
  type: 'SELECT_BOOKING',
  payload: bookingId
})

export const deleteBooking = bookingId => ({
  type: 'DELETE_BOOKING',
  payload: bookingId
})

export const updateBooking = bookingData => ({
  type: 'UPDATE_BOOKING',
  payload: bookingData
})