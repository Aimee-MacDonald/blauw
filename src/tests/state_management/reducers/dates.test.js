import datesReducer from '../../../state_management/reducers/dates'

test(`Create 'dates' default state`, () => {
  const defaultState = datesReducer(undefined, {})
  expect(defaultState).toEqual({
    currentDate: -7200000,
    startDate: -7200000,
    endDate: -7200000,
    dates: []
  })
})

test('Set the current date', () => {
  const state = {
    currentDate: -7200000,
    startDate: -7200000,
    endDate: -7200000,
    dates: []
  }

  const action = {
    type: 'SET_CURRENT_DATE',
    payload: 1622152800000
  }

  const result = datesReducer(state, action)

  expect(result).toEqual({
    currentDate: 1622152800000,
    startDate: -7200000,
    endDate: -7200000,
    dates: []
  })
})

test('Set the start date', () => {
  const state = {
    currentDate: -7200000,
    startDate: -7200000,
    endDate: -7200000,
    dates: []
  }

  const action = {
    type: 'SET_START_DATE',
    payload: 1622152800000
  }

  const result = datesReducer(state, action)

  expect(result).toEqual({
    currentDate: -7200000,
    startDate: 1622152800000,
    endDate: -7200000,
    dates: []
  })
})

test('Set the end date', () => {
  const state = {
    currentDate: -7200000,
    startDate: -7200000,
    endDate: -7200000,
    dates: []
  }

  const action = {
    type: 'SET_END_DATE',
    payload: 1622152800000
  }

  const result = datesReducer(state, action)

  expect(result).toEqual({
    currentDate: -7200000,
    startDate: -7200000,
    endDate: 1622152800000,
    dates: []
  })
})

test('Repopulate the dates', () => {
  const state = {
    currentDate: 1622152800000,
    startDate: 1619560800000,
    endDate: 1627336800000,
    dates: []
  }
  
  const action = {
    type: 'REPOPULATE_DATES'
  }

  const result = datesReducer(state, action)

  expect(result).toEqual({
    currentDate: 1622152800000,
    startDate: 1619560800000,
    endDate: 1627336800000,
    dates: [
    1619560800000, 1619647200000, 1619733600000, 1619820000000,
    1619906400000, 1619992800000, 1620079200000, 1620165600000,
    1620252000000, 1620338400000, 1620424800000, 1620511200000,
    1620597600000, 1620684000000, 1620770400000, 1620856800000,
    1620943200000, 1621029600000, 1621116000000, 1621202400000,
    1621288800000, 1621375200000, 1621461600000, 1621548000000,
    1621634400000, 1621720800000, 1621807200000, 1621893600000,
    1621980000000, 1622066400000, 1622152800000, 1622239200000,
    1622325600000, 1622412000000, 1622498400000, 1622584800000,
    1622671200000, 1622757600000, 1622844000000, 1622930400000,
    1623016800000, 1623103200000, 1623189600000, 1623276000000,
    1623362400000, 1623448800000, 1623535200000, 1623621600000,
    1623708000000, 1623794400000, 1623880800000, 1623967200000,
    1624053600000, 1624140000000, 1624226400000, 1624312800000,
    1624399200000, 1624485600000, 1624572000000, 1624658400000,
    1624744800000, 1624831200000, 1624917600000, 1625004000000,
    1625090400000, 1625176800000, 1625263200000, 1625349600000,
    1625436000000, 1625522400000, 1625608800000, 1625695200000,
    1625781600000, 1625868000000, 1625954400000, 1626040800000,
    1626127200000, 1626213600000, 1626300000000, 1626386400000,
    1626472800000, 1626559200000, 1626645600000, 1626732000000,
    1626818400000, 1626904800000, 1626991200000, 1627077600000,
    1627164000000, 1627250400000, 1627336800000
  ]})
})