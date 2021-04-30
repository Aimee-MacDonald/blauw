import {createStore} from 'redux'

const defaultState = {
  controls: {
    left: {
      open: false
    },
    right: {
      open: false
    }
  }
}

export default () => {
  const store = createStore((state = defaultState, {type, orientation}) => {
    switch(type){
      case 'TOGGLE_CONTROL':
        if(orientation === 'left'){
          return {
            controls: {
              ...state.controls,
              left: {
                open: !state.controls.left.open
              }
            }
          }
        } else if(orientation === 'right'){
          return {
            controls: {
              ...state.controls,
              right: {
                open: !state.controls.right.open
              }
            }
          }
        }
        
      default:
        return state
    }
  })
  
  return store
}