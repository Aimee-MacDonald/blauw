import {createStore, combineReducers} from 'redux'

import controlsReducer from './reducers/controls'
import navigationReducer from './reducers/navigation'
import modalReducer from './reducers/modal'
import bookingsReducer from './reducers/bookings'
import utilReducer from './reducers/util'
import datesReducer from './reducers/dates'
import roomsReducer from './reducers/rooms'
import notesReducer from './reducers/notes'

export const store = createStore(combineReducers({
  controls: controlsReducer,
  navigation: navigationReducer,
  modal: modalReducer,
  bookings: bookingsReducer,
  util: utilReducer,
  dates: datesReducer,
  rooms: roomsReducer,
  notes: notesReducer
}))
 
export default () => store