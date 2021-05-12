import {setModal} from '../../../state_management/actions/modal'

test(`Generate a 'default set modal' action`, () => {
  const action = setModal()
  expect(action).toEqual({
    type: 'SET_MODAL',
    payload: null
  })
})

test(`Generate a 'set modal' action`, () => {
  const action = setModal('createBooking')
  expect(action).toEqual({
    type: 'SET_MODAL',
    payload: 'createBooking'
  })
})