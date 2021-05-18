const defaultState = {
  bookings: [],
  selectedBooking: null
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'CREATE_BOOKING':
      return{...state, bookings: [...state.bookings, payload]}

    case 'SELECT_BOOKING':
      return{...state, selectedBooking: payload}

    case 'DELETE_BOOKING':
      return{
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== payload),
        selectedBooking: null
      }

    case 'UPDATE_BOOKING':
      return{
        ...state,
        bookings: state.bookings.map(booking => {
          if(booking.id === payload.id){
            return{
              ...booking,
              ...payload
            }
          } else {
            return booking
          }
        })
      }
      
    default:
      return state
  }
}