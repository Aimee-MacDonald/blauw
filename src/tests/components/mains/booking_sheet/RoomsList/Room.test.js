import React from 'react'
import {shallow} from 'enzyme'

import {Room} from '../../../../../components/mains/booking_sheet/RoomsList/Room'

test('Render a room', () => {
  const wrapper = shallow(<Room room={{_id: 'abcd1234'}}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})