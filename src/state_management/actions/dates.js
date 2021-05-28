export const setCurrentDate = datestamp => ({
  type: 'SET_CURRENT_DATE',
  payload: datestamp
})

export const setStartDate = datestamp => ({
  type: 'SET_START_DATE',
  payload: datestamp
})

export const setEndDate = datestamp => ({
  type: 'SET_END_DATE',
  payload: datestamp
})

export const repopulateDates = () => ({
  type: 'REPOPULATE_DATES'
})