import React from 'react'
import {shallow} from 'enzyme'

import {StatusBar} from '../../../components/controls/StatusBar'

test('Render connected Status Bar', () => {
  const wrapper = shallow(<StatusBar connected={true}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render disconnected Status Bar', () => {
  const wrapper = shallow(<StatusBar connected={false}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})