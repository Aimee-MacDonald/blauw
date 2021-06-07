import React from 'react'
import {shallow} from 'enzyme'

import {ModalLayer} from '../../components/ModalLayer'

test('Render default Modal Layer', () => {
  const wrapper = shallow(<ModalLayer
    modalActive={false}
    activeModal={null}
    _id={null}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test(`Render 'Create Booking' Modal`, () => {
  const wrapper = shallow(<ModalLayer
    modalActive={true}
    activeModal={'createBooking'}
    _id={null}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test(`Render 'Delete Booking' Modal`, () => {
  const wrapper = shallow(<ModalLayer
    modalActive={true}
    activeModal={'deleteBooking'}
    _id={'abcd1234'}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})

test(`Render 'Edit Booking' Modal`, () => {
  const wrapper = shallow(<ModalLayer
    modalActive={true}
    activeModal={'editBooking'}
    _id={'abcd1234'}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})