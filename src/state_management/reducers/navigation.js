const defaultState = {
  bookingSheet: false,
  checkout: false,
  stock: false,
  notes: false
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'SET_MAIN':
      return{
        ...defaultState,
        [payload]: true
      }
      
    default:
      return state
  }
}