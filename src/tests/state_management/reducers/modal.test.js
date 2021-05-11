import modalReducer from '../../../state_management/reducers/modal'

test('Set default active modal', () => {
  const state = {activeModal: undefined}
  const action = {type: 'SET_MODAL', modalName: undefined}
  const result = modalReducer(state, action)
  expect(result).toEqual({activeModal: null})
})

test('Set active modal', () => {
  const state = {activeModal: undefined}
  const action = {type: 'SET_MODAL', modalName: 'createBooking'}
  const result = modalReducer(state, action)
  expect(result).toEqual({activeModal: 'createBooking'})
})