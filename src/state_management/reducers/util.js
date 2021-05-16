const defaultState = {
  connected: false
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'SET_CONNECTED':
      return{connected: payload}

    default:
      return state
  }
}