import React from 'react'
import {shallow} from 'enzyme'

import {RoomsList} from '../../../../components/mains/booking_sheet/RoomsList'

test('Render default rooms list', () => {
  const groups = [{"groupName":"Camping","rooms":[{"roomName":"camping","maxPax":80}]},{"groupName":"Safari Tents","rooms":[{"roomName":"safari_tent_1","maxPax":2},{"roomName":"safari_tent_2","maxPax":2},{"roomName":"safari_tent_3","maxPax":2},{"roomName":"safari_tent_4","maxPax":2},{"roomName":"safari_tent_5","maxPax":2},{"roomName":"safari_tent_6","maxPax":2},{"roomName":"safari_tent_7","maxPax":2},{"roomName":"safari_tent_8","maxPax":2},{"roomName":"safari_tent_9","maxPax":2},{"roomName":"safari_tent_10","maxPax":2},{"roomName":"safari_tent_11","maxPax":2},{"roomName":"safari_tent_12","maxPax":2}]},{"groupName":"Dove","rooms":[{"roomName":"dove_left","maxPax":4},{"roomName":"dove_middle","maxPax":3},{"roomName":"dove_right","maxPax":4}]},{"groupName":"Loerie","rooms":[{"roomName":"loerie_left","maxPax":2},{"roomName":"loerie_right","maxPax":2},{"roomName":"loerie_family","maxPax":4}]},{"groupName":"Owl","rooms":[{"roomName":"owl_left","maxPax":2},{"roomName":"owl_lounge","maxPax":5},{"roomName":"owl_right","maxPax":2}]},{"groupName":"Dorms","rooms":[{"roomName":"dove_dorm","maxPax":8},{"roomName":"forest_house","maxPax":7},{"roomName":"forest_house_2","maxPax":11},{"roomName":"loerie_dorm","maxPax":7},{"roomName":"owl_dorm","maxPax":9}]}]

  const wrapper = shallow(<RoomsList
    scroll={0}
    hoveredCell={null}
    groups={groups}
  />)

  expect(wrapper.getElement()).toMatchSnapshot()
})