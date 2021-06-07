import React from 'react'
import {shallow} from 'enzyme'

import {Navigation} from '../../../components/controls/Navigation'

test('Render closed Navigation', () => {
  const wrapper = shallow(<Navigation open={false}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render opened Navigation', () => {
  const wrapper = shallow(<Navigation open={true}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})