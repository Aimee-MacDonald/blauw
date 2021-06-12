import React from 'react'
import {shallow} from 'enzyme'

import {RemoveRoom} from '../../../components/modals/RemoveRoom'

test(`Render 'Remove Room' Modal`, () => {
  const wrapper = shallow(<RemoveRoom/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})