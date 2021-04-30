import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'
import navigationReducer from './reducers/navigation'

export default () => {
  const store = createStore(combineReducers({
    controls: controlsReducer,
    navigation: navigationReducer
  }))
  
  return store
}