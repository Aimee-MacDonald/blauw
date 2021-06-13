import {v4} from 'uuid'

export const createBooking = bookingData => ({
  type: 'CREATE_BOOKING',
  payload: {
    _id: v4(),
    ...bookingData,
    status: 'confirmed',
    checked_in: false
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

export const checkIn = bookingId => ({
  type: 'CHECKIN_BOOKING',
  payload: bookingId
})

export const checkOut = bookingId => ({
  type: 'CHECKOUT_BOOKING',
  payload: bookingId
})