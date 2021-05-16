import {setConnected} from '../../../state_management/actions/util'

test(`Generate a 'set connected' action`, () => {
  const action = setConnected(true)
  expect(action).toEqual({
    type: 'SET_CONNECTED',
    payload: true
  })
})