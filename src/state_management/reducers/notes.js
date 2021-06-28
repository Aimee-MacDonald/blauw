export default (state = [], {type, payload}) => {
  switch(type){
    case 'CREATE_NOTE':
      return [
        ...state,
        payload
      ]
    
    default:
      return state
  }
}