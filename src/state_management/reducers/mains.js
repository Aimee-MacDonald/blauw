const defaultState = {
  bookingSheet: {
    open: false
  },
  checkout: {
    open: false
  }
}

export default (state = defaultState, {type, main}) => {
  switch(type){
    case 'SET_MAIN':
      switch(main){
        case 'bookingSheet':
          return{
            ...defaultState,
            bookingSheet: {
              open: true
            }
          }

        case 'checkout':
          return{
            ...defaultState,
            checkout: {
              open: true
            }
          }
      }

    default:
      return state
  }
}