export default (state = [], {type, bookingData}) => {
  switch(type){
    case 'CREATE_BOOKING':
      return [...state, bookingData]
      
    default:
      return state
  }
}