import {normaliseDate} from '../../util/util'

const defaultState = {
  currentDate: normaliseDate(new Date(0)),
  startDate: normaliseDate(new Date(0)),
  endDate: normaliseDate(new Date(0)),
  dates: []
}

export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'SET_CURRENT_DATE':
      return{
        ...state,
        currentDate: payload
      }

    case 'SET_START_DATE':
      return{
        ...state,
        startDate: payload
      }

    case 'SET_END_DATE':
      return{
        ...state,
        endDate: payload
      }

    case 'REPOPULATE_DATES':
      let ds = []
      for(let i = state.startDate; i <= state.endDate; i += 86400000) ds.push(i)
      return {
        ...state,
        dates: ds
      }

    default:
      return state
  }
}