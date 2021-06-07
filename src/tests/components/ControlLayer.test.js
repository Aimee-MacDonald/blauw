import React from 'react'
import {shallow} from 'enzyme'

import {ControlLayer} from '../../components/ControlLayer'

test('Render default Control Layer', () => {
  const wrapper = shallow(<ControlLayer/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})