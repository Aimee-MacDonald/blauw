const defaultState = {
  activeModal: null
}

export default (state = defaultState, {type, payload = null}) => {
  switch(type){
    case 'SET_MODAL':
      return {activeModal: payload}

    default:
      return state
  }
}