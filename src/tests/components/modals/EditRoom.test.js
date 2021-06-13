import React from 'react'
import {shallow} from 'enzyme'

import {EditRoom} from '../../../components/modals/EditRoom'

test(`Render 'Edit Room' Modal`, () => {
  const wrapper = shallow(<EditRoom/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})