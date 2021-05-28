import {formatDate} from '../../util/util'

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