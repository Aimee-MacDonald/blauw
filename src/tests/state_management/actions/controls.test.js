import {toggleControl} from '../../../state_management/actions/controls'

test(`Generate a 'toggle control' action`, () => {
  const action = toggleControl('left')
  expect(action).toEqual({
    type: 'TOGGLE_CONTROL',
    orientation: 'left'
  })
})