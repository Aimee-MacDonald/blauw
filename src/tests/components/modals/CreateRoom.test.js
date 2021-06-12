import React from 'react'
import {shallow} from 'enzyme'

import {CreateRoom} from '../../../components/modals/CreateRoom'

test(`Render 'Create Room' Modal`, () => {
  const wrapper = shallow(<CreateRoom/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})