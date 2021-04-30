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
      if(orientation === 'left'){
        return{
          ...state,
          left: {
            open: !state.left.open
          }
        }
      } else if(orientation === 'right'){
        return{
          ...state,
          right: {
            open: !state.right.open
          }
        }
      }

    default:
      return state
  }
}