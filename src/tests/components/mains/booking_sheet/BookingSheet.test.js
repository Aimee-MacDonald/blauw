import React from 'react'
import {shallow} from 'enzyme'

import {BookingSheet} from '../../../../components/mains/booking_sheet/BookingSheet'

test('Render default booking sheet', () => {
  const wrapper = shallow(<BookingSheet/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})