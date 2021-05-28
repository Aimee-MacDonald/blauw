export const formatDate = (dateObject) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  if(typeof(dateObject) === 'number'){
    const dt = new Date(dateObject)
    return{
      day: days[dt.getDay()],
      date: dt.getDate(),
      month: months[dt.getMonth()],
      year: dt.getFullYear()
    }
  } else {
    return{
      day: days[dateObject.getDay()],
      date: dateObject.getDate(),
      month: months[dateObject.getMonth()],
      year: dateObject.getFullYear()
    }
  }
}