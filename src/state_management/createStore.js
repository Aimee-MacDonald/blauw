import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'
import navigationReducer from './reducers/navigation'
import modalReducer from './reducers/modal'

export default () => {
  const store = createStore(combineReducers({
    controls: controlsReducer,
    navigation: navigationReducer,
    modal: modalReducer
  }))
  
  return store
}