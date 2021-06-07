import React from 'react'
import {shallow} from 'enzyme'

import {Stock} from '../../../components/mains/Stock'

test('Render default Stock screen', () => {
  const wrapper = shallow(<Stock/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})