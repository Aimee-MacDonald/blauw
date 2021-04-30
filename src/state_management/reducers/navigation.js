const defaultState = {
  bookingSheet: false,
  checkout: false
}

export default (state = defaultState, {type, main}) => {
  switch(type){
    case 'SET_MAIN':
      switch(main){
        case 'bookingSheet':
          return{
            ...defaultState,
            bookingSheet: true
          }

        case 'checkout':
          return{
            ...defaultState,
            checkout: true
          }
      }
      
    default:
      return state
  }
}