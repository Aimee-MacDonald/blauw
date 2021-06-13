export const getSelectedBooking = bookings => {
  return bookings.bookings.filter(booking => booking._id === bookings.selectedBooking)[0]
}