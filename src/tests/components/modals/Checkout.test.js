import React from 'react'
import {shallow} from 'enzyme'

import {Checkout} from '../../../components/modals/Checkout'

test('Render Checkout Modal', () => {
  const wrapper = shallow(<Checkout/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})