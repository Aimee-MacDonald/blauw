import {setCurrentDate, setStartDate, setEndDate, repopulateDates} from '../../../state_management/actions/dates'
import {normaliseDate} from '../../../util/util'

test(`Generate a 'set current date' action`, () => {
  const action = setCurrentDate(normaliseDate(new Date(1622206197249)))
  expect(action).toEqual({
    type: 'SET_CURRENT_DATE',
    payload: 1622152800000
  })
})

test(`Generate a 'set start date' action`, () => {
  const action = setStartDate(normaliseDate(new Date(1622206197249)))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    payload: 1622152800000
  })
})

test(`Generate a 'set end date' action`, () => {
  const action = setEndDate(normaliseDate(new Date(1622206197249)))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    payload: 1622152800000
  })
})

test(`Generate a 'repopulate dates' action`, () => {
  const action = repopulateDates()
  expect(action).toEqual({
    type: 'REPOPULATE_DATES'
  })
})