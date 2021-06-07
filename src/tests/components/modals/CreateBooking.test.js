import React from 'react'
import {shallow} from 'enzyme'

import {CreateBooking} from '../../../components/modals/CreateBooking'

test(`Render default 'Create Booking' modal`, () => {
  const rooms = [{
    roomName: 'camping',
    groupName: 'Camping',
    maxPax: 80
  }, {
    roomName: 'safari_tent_1',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_2',
    groupName: 'Safari Tents',
    maxPax: 2
  }]

  const wrapper = shallow(<CreateBooking
    rooms={rooms}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})