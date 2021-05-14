import {toggleControl, toggleControlLock} from '../../../state_management/actions/controls'

test(`Generate a 'toggle control' action`, () => {
  const action = toggleControl('left')
  expect(action).toEqual({
    type: 'TOGGLE_CONTROL',
    payload: 'left'
  })
})

test(`Generate a 'lock control' action`, () => {
  const action = toggleControlLock('left')
  expect(action).toEqual({
    type: 'TOGGLE_CONTROL_LOCK',
    payload: 'left'
  })
})