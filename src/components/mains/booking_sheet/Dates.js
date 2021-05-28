import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {formatDate, normaliseDate} from '../../../util/util'

import {setCurrentDate, setStartDate, setEndDate, repopulateDates} from '../../../state_management/actions/dates'

const Dates = props => {
  const datesEl = useRef(null)

  useEffect(() => datesEl.current.scrollLeft = props.scroll)
  useEffect(() => {
    const dateObject = new Date()
    props.dispatch(setCurrentDate(normaliseDate(dateObject)))
    dateObject.setDate(dateObject.getDate() - 30)
    props.dispatch(setStartDate(normaliseDate(dateObject)))
    dateObject.setDate(dateObject.getDate() + 90)
    props.dispatch(setEndDate(normaliseDate(dateObject)))
    props.dispatch(repopulateDates())
  }, [])

  return(
    <StyledDates ref={datesEl}>
      {props.dates.dates.map((datestamp, index) => <StyledDate key={index} hoveredCell={props.hoveredCell === index + 1}>
        <p>{formatDate(datestamp).month}</p>
        <p>{formatDate(datestamp).date}</p>
      </StyledDate>)}
    </StyledDates>
  )
}

const StyledDates = styled.div`
  grid-column-start: 2;
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(91, 64px);
`

const StyledDate = styled.div`
  background-color: ${props => props.hoveredCell ? 'lime' : 'purple'};
  display: flex;
  justify-content: center;
  flex-flow: nowrap column;
  justify-content: center;

  p{
    text-align: center;
    font-weight: bold;
    font-size: 16pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const mapStateToProps = ({dates}) => ({dates})

export default connect(mapStateToProps)(Dates)