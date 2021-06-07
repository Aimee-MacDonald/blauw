import React from 'react'
import {shallow} from 'enzyme'

import {DeleteBooking} from '../../../components/modals/DeleteBooking'

test(`Render 'Delete Booking' modal`, () => {
  const wrapper = shallow(<DeleteBooking
    _id={'0a70ac70-0d82-4ee7-a10d-2bf30af2e9f0'}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})