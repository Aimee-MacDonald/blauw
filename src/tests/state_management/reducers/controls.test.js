import controlReducer from '../../../state_management/reducers/controls'

test('Open left control', () => {
  const state = {left: {open: false}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', orientation: 'left'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: true}, right: {open: false}})
})

test('Close left control', () => {
  const state = {left: {open: true}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', orientation: 'left'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: false}})
})

test('Open right control', () => {
  const state = {left: {open: false}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', orientation: 'right'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: true}})
})

test('Close right control', () => {
  const state = {left: {open: false}, right: {open: true}}
  const action = {type: 'TOGGLE_CONTROL', orientation: 'right'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: false}})
})