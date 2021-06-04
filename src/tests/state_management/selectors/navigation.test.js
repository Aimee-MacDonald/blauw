import {getMainsFlags} from '../../../state_management/selectors/navigation'

test('Return a list of flags for each main component', () => {
  const flags = getMainsFlags({
    activeMain: 'bookingSheet'
  })
  
  expect(flags).toEqual({
    bookingSheet: true,
    checkout: false,
    stock: false,
    notes: false,
    addRoom: false
  })
})