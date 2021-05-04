const defaultState = {
  left: {
    open: false
  },
  right: {
    open: false
  }
}

export default (state = defaultState, {type, orientation}) => {
  switch(type){
    case 'TOGGLE_CONTROL':
      return{
        ...state,
        [orientation]: {
          open: !state[orientation].open
        }
      }

    default:
      return state
  }
}