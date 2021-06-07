import React from 'react'
import {shallow} from 'enzyme'

import {MainLayer} from '../../components/MainLayer'

test('Render Booking Sheet', () => {
  const wrapper = shallow(<MainLayer
    bookingSheet={true}
    checkout={false}
    stock={false}
    notes={false}
    addRoom={false}
  />)
  
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render Checkout', () => {
  const wrapper = shallow(<MainLayer
    bookingSheet={false}
    checkout={true}
    stock={false}
    notes={false}
    addRoom={false}
  />)
  
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render Stock', () => {
  const wrapper = shallow(<MainLayer
    bookingSheet={false}
    checkout={false}
    stock={true}
    notes={false}
    addRoom={false}
  />)
  
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render Notes', () => {
  const wrapper = shallow(<MainLayer
    bookingSheet={false}
    checkout={false}
    stock={false}
    notes={true}
    addRoom={false}
  />)
  
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render Add Room', () => {
  const wrapper = shallow(<MainLayer
    bookingSheet={false}
    checkout={false}
    stock={false}
    notes={false}
    addRoom={true}
  />)
  
  expect(wrapper.getElement()).toMatchSnapshot()
})