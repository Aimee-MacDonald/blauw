import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

import {formatDate} from '../../../util/util'

const Dates = props => {
  const datesEl = useRef(null)
  const [currentDate, setCurrentDate] = useState(0)
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  const [dates, setDates] = useState([])

  useEffect(() => datesEl.current.scrollLeft = props.scroll)

  useEffect(() => {
    let dateObject = new Date()
    dateObject.setHours(0, 0, 0, 0)
    const cd = dateObject.getTime()

    dateObject.setDate(dateObject.getDate() - 30)
    const sd = dateObject.getTime()

    dateObject.setDate(dateObject.getDate() + 90)
    const ed = dateObject.getTime()

    let ds = []
    for(let i = sd; i <= ed; i += 86400000) ds.push(i)
    
    setCurrentDate(cd)
    setStartDate(sd)
    setEndDate(ed)
    setDates(ds)
  }, [])

  return(
    <StyledDates ref={datesEl}>
      {dates.map((datestamp, index) => <StyledDate key={index} hoveredCell={props.hoveredCell === index + 1}>
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

export default Dates