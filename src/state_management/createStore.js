import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'

export default () => {
  const store = createStore(combineReducers({
    controls: controlsReducer
  }))
  
  return store
}