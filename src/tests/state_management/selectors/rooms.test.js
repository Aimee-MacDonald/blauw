import {getRoomGroupings, getDefaultRoomFlags} from '../../../state_management/selectors/rooms'

test('Return a grouped version of the rooms list', () => {
  const rooms = [{
    _id: 'abcd1234',
    name: 'Safari Tent 1',
    group: 'Safari Tents',
    shared: false,
    maxPax: 2,
    basePrice: 420,
    personPrice: 0,
    showBeds: false
  }, {
    _id: '1234abcd',
    name: 'Safari Tent 2',
    group: 'Safari Tents',
    shared: false,
    maxPax: 2,
    basePrice: 420,
    personPrice: 0,
    showBeds: false
  }, {
    _id: '6789wxyz',
    name: 'Dove Left',
    group: 'Dove',
    shared: false,
    maxPax: 2,
    basePrice: 200,
    personPrice: 100,
    showBeds: true
  }, {
    _id: 'wxyz6789',
    name: 'Camping',
    group: 'ungrouped',
    shared: true,
    maxPax: 80,
    basePrice: 0,
    personPrice: 240,
    showBeds: true
  }]

  const result = getRoomGroupings(rooms)

  expect(result).toEqual([{
    name: 'Safari Tents',
    rooms: [{
      _id: 'abcd1234',
      name: 'Safari Tent 1',
      shared: false,
      maxPax: 2,
      basePrice: 420,
      personPrice: 0,
      showBeds: false
    }, {
      _id: '1234abcd',
      name: 'Safari Tent 2',
      shared: false,
      maxPax: 2,
      basePrice: 420,
      personPrice: 0,
      showBeds: false
    }]
  }, {
    name: 'Dove',
    rooms: [{
      _id: '6789wxyz',
      name: 'Dove Left',
      shared: false,
      maxPax: 2,
      basePrice: 200,
      personPrice: 100,
      showBeds: true
    }]
  }, {
    name: 'ungrouped',
    rooms: [{
      _id: 'wxyz6789',
      name: 'Camping',
      shared: true,
      maxPax: 80,
      basePrice: 0,
      personPrice: 240,
      showBeds: true
    }]
  }])
})

test('Return default group flags', () => {
  const groups = [{
    name: 'Safari Tents',
    rooms: [{
      _id: 'abcd1234',
      name: 'Safari Tent 1',
      shared: false,
      maxPax: 2,
      basePrice: 420,
      personPrice: 0,
      showBeds: false
    }, {
      _id: '1234abcd',
      name: 'Safari Tent 2',
      shared: false,
      maxPax: 2,
      basePrice: 420,
      personPrice: 0,
      showBeds: false
    }]
  }, {
    name: 'Dove',
    rooms: [{
      _id: '6789wxyz',
      name: 'Dove Left',
      shared: false,
      maxPax: 2,
      basePrice: 200,
      personPrice: 100,
      showBeds: true
    }]
  }, {
    name: 'ungrouped',
    rooms: [{
      _id: 'wxyz6789',
      name: 'Camping',
      shared: true,
      maxPax: 80,
      basePrice: 0,
      personPrice: 240,
      showBeds: true
    }]
  }]

  const flags = getDefaultRoomFlags(groups)

  expect(flags).toEqual({
    'Safari Tents': {
      open: false,
      rooms: {
        'Safari Tent 1': false,
        'Safari Tent 2': false,
      }
    },
    'Dove': {
      open: false,
      rooms: {
        'Dove Left': false
      }
    },
    'ungrouped': {
      open: true,
      rooms: {
        'Camping': false
      }
    }
  })
})