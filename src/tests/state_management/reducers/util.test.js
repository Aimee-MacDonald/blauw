import utilReducer from '../../../state_management/reducers/util'

test('Set the server connection status', () => {
  const state = {connected: false}
  const action = {type: 'SET_CONNECTED', payload: true}
  const result = utilReducer(state, action)
  expect(result).toEqual({connected: true})
})