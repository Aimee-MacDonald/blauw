import React from 'react'
import {shallow} from 'enzyme'

import {EditBooking} from '../../../components/modals/EditBooking'

test(`Render 'Edit Booking' Modal`, () => {
  const wrapper = shallow(<EditBooking
    _id={'485508e8-8cc9-418d-bc79-0b183964c99f'}
    booking_name={'A'}
    checkin_date={1623016800000}
    room={0}
    nights={10}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})