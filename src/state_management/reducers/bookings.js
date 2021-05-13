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
      
    default:
      return state
  }
}