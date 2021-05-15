const defaultState = {
  bookings: [],
  selectedBooking: null
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'CREATE_BOOKING':
      return {...state, bookings: [...state.bookings, payload]}

    case 'SELECT_BOOKING':
      return {...state, selectedBooking: payload}

    case 'DELETE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== payload),
        selectedBooking: null
      }
      
    default:
      return state
  }
}