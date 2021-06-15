import React from 'react'
import {shallow} from 'enzyme'

import {CreateBooking} from '../../../../components/modals/CreateBooking/CreateBooking'

test(`Render default 'Create Booking' modal`, () => {
  const wrapper = shallow(<CreateBooking/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})