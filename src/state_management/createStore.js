import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'
import navigationReducer from './reducers/navigation'
import modalReducer from './reducers/modal'
import bookingsReducer from './reducers/bookings'

export const store = createStore(combineReducers({
  controls: controlsReducer,
  navigation: navigationReducer,
  modal: modalReducer,
  bookings: bookingsReducer
}))
 
export default () => store