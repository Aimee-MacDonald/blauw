import controlReducer from '../../../state_management/reducers/controls'

test('Open left control', () => {
  const state = {left: {open: false}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', payload: 'left'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: true}, right: {open: false}})
})

test('Close left control', () => {
  const state = {left: {open: true}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', payload: 'left'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: false}})
})

test('Open right control', () => {
  const state = {left: {open: false}, right: {open: false}}
  const action = {type: 'TOGGLE_CONTROL', payload: 'right'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: true}})
})

test('Close right control', () => {
  const state = {left: {open: false}, right: {open: true}}
  const action = {type: 'TOGGLE_CONTROL', payload: 'right'}
  const result = controlReducer(state, action)
  expect(result).toEqual({left: {open: false}, right: {open: false}})
})

test('Lock left control', () => {
  const state = {
    left: {
      open: false,
      locked: false
    },
    right: {
      open: false,
      locked: false
    }
  }

  const action = {type: 'TOGGLE_CONTROL_LOCK', payload: 'left'}
  const result = controlReducer(state, action)

  expect(result).toEqual({
    left: {
      open: false,
      locked: true
    },
    right: {
      open: false,
      locked: false
    }
  })
})

test('Toggle locked control', () => {
  const state = {
    left: {
      open: false,
      locked: true
    },
    right: {
      open: false,
      locked: false
    }
  }

  const action = {type: 'TOGGLE_CONTROL', payload: 'left'}
  const result = controlReducer(state, action)

  expect(result).toEqual(state)
})