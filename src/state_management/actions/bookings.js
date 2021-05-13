export const createBooking = bookingData => ({
  type: 'CREATE_BOOKING',
  payload: {
    ...bookingData,
    id: `d${bookingData.date}r${bookingData.room}n${bookingData.nights}`
  }
})

export const selectBooking = bookingId => ({
  type: 'SELECT_BOOKING',
  payload: bookingId
})