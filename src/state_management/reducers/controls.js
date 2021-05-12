const defaultState = {
  left: {
    open: false
  },
  right: {
    open: false
  }
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'TOGGLE_CONTROL':
      return{
        ...state,
        [payload]: {
          open: !state[payload].open
        }
      }

    default:
      return state
  }
}