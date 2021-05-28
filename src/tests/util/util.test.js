import {formatDate, normaliseDate} from '../../util/util'

test('Create formated date from date object', () => {
  const dateObject = new Date(0)
  const formatedDate = formatDate(dateObject)

  expect(formatedDate).toEqual({
    day: 'Thursday',
    date: 1,
    month: 'January',
    year: 1970
  })
})

test('Create formated date from timestamp', () => {
  const formatedDate = formatDate(0)

  expect(formatedDate).toEqual({
    day: 'Thursday',
    date: 1,
    month: 'January',
    year: 1970
  })
})

test('Create normalised datestamp from date object', () => {
  const dateObject = new Date(0)
  const dateStamp = normaliseDate(dateObject)
  expect(dateStamp).toEqual(-7200000)
})

test('Create normalised datestamp from datestamp', () => {
  const ds = new Date(1622206197249).getTime()
  const nds = normaliseDate(ds)
  expect(nds).toBe(1622152800000)
})