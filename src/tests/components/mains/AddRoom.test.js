import React from 'react'
import {shallow} from 'enzyme'

import {AddRoom} from '../../../components/mains/AddRoom'

test('Render default Add Room screen', () => {
  const wrapper = shallow(<AddRoom/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})