import {setMain} from '../../../state_management/actions/navigation'

test(`Generate 'set main' action`, () => {
  const action = setMain('bookingSheet')
  expect(action).toEqual({
    type: 'SET_MAIN',
    main: 'bookingSheet'
  })
})