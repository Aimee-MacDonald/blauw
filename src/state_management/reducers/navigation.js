const defaultState = {
  bookingSheet: false,
  checkout: false,
  stock: false,
  notes: false
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

        case 'stock':
          return{
            ...defaultState,
            stock: true
          }

        case 'notes':
          return{
            ...defaultState,
            notes: true
          }
      }
      
    default:
      return state
  }
}