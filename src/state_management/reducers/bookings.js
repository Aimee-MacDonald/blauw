export default (state = [], {type, payload}) => {
  switch(type){
    case 'CREATE_BOOKING':
      return [...state, payload]
      
    default:
      return state
  }
}