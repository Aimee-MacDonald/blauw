import navigationReducer from '../../../state_management/reducers/navigation'

test(`Navigate from 'Notes' to 'Booking Sheet'`, () => {
  const state = {
    activeMain: 'stock'
  }

  const action = {type: 'SET_MAIN', payload: 'bookingSheet'}
  const result = navigationReducer(state, action)
  expect(result).toEqual({activeMain: 'bookingSheet'})
})