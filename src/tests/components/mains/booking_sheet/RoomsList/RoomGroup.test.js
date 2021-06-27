import React from 'react'
import {shallow} from 'enzyme'

import {RoomGroup} from '../../../../../components/mains/booking_sheet/RoomsList/RoomGroup'

test('Render a group of rooms', () => {
  const wrapper = shallow(<RoomGroup group={{name: 'abcd1234'}}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})