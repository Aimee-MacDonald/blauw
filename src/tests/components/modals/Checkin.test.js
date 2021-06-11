import React from 'react'
import {shallow} from 'enzyme'

import {Checkin} from '../../../components/modals/Checkin'

test('Render Checkin Modal', () => {
  const wrapper = shallow(<Checkin/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})