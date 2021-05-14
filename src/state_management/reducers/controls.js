const defaultState = {
  left: {
    open: false,
    locked: false
  },
  right: {
    open: false,
    locked: false
  }
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'TOGGLE_CONTROL':
      return{
        ...state,
        [payload]: {
          open: state[payload].locked ? state[payload].open : !state[payload].open,
          locked: state[payload].locked
        }
      }

    case 'TOGGLE_CONTROL_LOCK':
      return{
        ...state,
        [payload]: {
          open: state[payload].open,
          locked: !state[payload].locked
        }
      }

    default:
      return state
  }
}