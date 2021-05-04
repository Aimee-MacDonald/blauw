const defaultState = {
  bookingSheet: false,
  checkout: false,
  stock: false,
  notes: false
}

export default (state = defaultState, {type, main}) => {
  switch(type){
    case 'SET_MAIN':
      return{
        ...defaultState,
        [main]: true
      }
      
    default:
      return state
  }
}