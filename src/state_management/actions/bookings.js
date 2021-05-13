export const createBooking = bookingData => ({
  type: 'CREATE_BOOKING',
  payload: {
    ...bookingData,
    id: `d${bookingData.date}r${bookingData.room}n${bookingData.nights}`
  }
})