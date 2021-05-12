import navigationReducer from '../../../state_management/reducers/navigation'

test('Navigate to main', () => {
  const state = {
    bookingSheet: false,
    checkout: false,
    stock: false,
    notes: false
  }

  const action = {type: 'SET_MAIN', payload: 'bookingSheet'}
  const result = navigationReducer(state, action)
  expect(result).toEqual({...state, bookingSheet: true})
})