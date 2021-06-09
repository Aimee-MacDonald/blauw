import React from 'react'
import {shallow} from 'enzyme'

import {EditBooking} from '../../../components/modals/EditBooking'

test(`Render 'Edit Booking' Modal`, () => {
  const bookingDetails = {
    _id: '485508e8-8cc9-418d-bc79-0b183964c99f',
    booking_name: 'A',
    checkin_date: 1623016800000,
    room: 0,
    nights: 10
  }

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

  const wrapper = shallow(<EditBooking
    bookingDetails={bookingDetails}
    rooms={rooms}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})