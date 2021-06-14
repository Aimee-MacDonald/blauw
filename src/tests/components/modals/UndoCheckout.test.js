import React from 'react'
import {shallow} from 'enzyme'

import {UndoCheckout} from '../../../components/modals/UndoCheckout'

test(`Render 'Undo Checkout' Modal`, () => {
  const wrapper = shallow(<UndoCheckout/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})