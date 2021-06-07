import React from 'react'
import {shallow} from 'enzyme'

import {Checkout} from '../../../components/mains/Checkout'

test('Render default Checkout screen', () => {
  const wrapper = shallow(<Checkout/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})