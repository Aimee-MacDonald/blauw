import {getRoomGroupings} from '../../../state_management/selectors/rooms'

test('Return a grouped version of the rooms list', () => {
  const rooms = [{
    roomName: 'Safari Tent 1',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'Safari Tent 2',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'Dove Right',
    groupName: 'Dove',
    maxPax: 4
  }]

  const result = getRoomGroupings(rooms)
  
  expect(result).toEqual([{
    groupName: 'Safari Tents',
    rooms: [{
      roomName: 'Safari Tent 1',
      maxPax: 2
    }, {
      roomName: 'Safari Tent 2',
      maxPax: 2
    }]
  }, {
    groupName: 'Dove',
    rooms: [{
      roomName: 'Dove Right',
      maxPax: 4
    }]
  }])
})