import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'
import mainsReducer from './reducers/mains'

export default () => {
  const store = createStore(combineReducers({
    controls: controlsReducer,
    mains: mainsReducer
  }))
  
  return store
}