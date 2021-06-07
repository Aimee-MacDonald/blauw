import React from 'react'
import {shallow} from 'enzyme'

import {Notes} from '../../../components/mains/Notes'

test('Render default Notes screen', () => {
  const wrapper = shallow(<Notes/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})