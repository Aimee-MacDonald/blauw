const defaultState = {
  activeMain: 'bookingSheet'
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'SET_MAIN':
      return{
        activeMain: payload
      }
      
    default:
      return state
  }
}