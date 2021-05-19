import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

const Dates = props => {
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]               

  const datesEl = useRef(null)
  useEffect(() => datesEl.current.scrollLeft = props.scroll)
  
  return(
    <StyledDates ref={datesEl}>
      {dates.map(date => (
        <StyledDate key={`${date}`} hoveredCell={props.hoveredCell === date}>
          <p>{date}</p>
        </StyledDate>
      ))}
    </StyledDates>
  )
}

const StyledDates = styled.div`
  grid-column-start: 2;
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(60, 64px);
`

const StyledDate = styled.div`
  background-color: ${props => props.hoveredCell ? 'lime' : 'purple'};
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    text-align: center;
    padding: 0.4rem 0;
    font-weight: bold;
    font-size: 16pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default Dates