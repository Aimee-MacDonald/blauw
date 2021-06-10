import React from 'react'
import {shallow} from 'enzyme'

import {Toolbox} from '../../../components/controls/Toolbox'

test('Render closed Toolbox', () => {
  const navigation = {
    "bookingSheet":true,
    "checkout":false,
    "stock":false,
    "notes":false,
    "addRoom":false
  }

  const wrapper = shallow(<Toolbox
    open={false}
    navigation={navigation}
    selectedBooking={null}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render booking sheet Toolbox', () => {
  const navigation = {
    "bookingSheet":true,
    "checkout":false,
    "stock":false,
    "notes":false,
    "addRoom":false
  }

  const wrapper = shallow(<Toolbox
    open={true}
    navigation={navigation}
    selectedBooking={null}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test('Render booking sheet Toolbox with a booking selected', () => {
  const navigation = {
    "bookingSheet":true,
    "checkout":false,
    "stock":false,
    "notes":false,
    "addRoom":false
  }

  const wrapper = shallow(<Toolbox
    open={true}
    navigation={navigation}
    selectedBooking={'abcd1234'}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test(`Render 'edit rooms list' Toolbox`, () => {
  const navigation = {
    "bookingSheet":false,
    "checkout":false,
    "stock":false,
    "notes":false,
    "addRoom":false,
    "editRoomsList": true
  }

  const wrapper = shallow(<Toolbox
    open={true}
    navigation={navigation}
    selectedBooking={null}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})
