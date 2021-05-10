const defaultState = {
  activeModal: null
}

export default (state = defaultState, {type, modalName}) => {
  switch(type){
    case 'SET_MODAL':
      return {activeModal: modalName}

    default:
      return state
  }
}