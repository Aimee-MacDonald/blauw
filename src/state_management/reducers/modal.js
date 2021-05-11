const defaultState = {
  activeModal: null
}

export default (state = defaultState, {type, modalName = null}) => {
  switch(type){
    case 'SET_MODAL':
      return {activeModal: modalName}

    default:
      return state
  }
}