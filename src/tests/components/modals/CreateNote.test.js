import React from 'react'
import {shallow} from 'enzyme'

import {CreateNote} from '../../../components/modals/CreateNote'

test(`Render the 'Create Note' modal`, () => {
  const wrapper = shallow(<CreateNote/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})