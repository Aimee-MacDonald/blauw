import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

const Dates = props => {
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  const datesEl = useRef(null)
  useEffect(() => datesEl.current.scrollLeft = props.scroll)
  
  return(
    <StyledDates ref={datesEl}>
      {dates.map(date => <p key={`${date + Math.random()}`}>{date}</p>)}
    </StyledDates>
  )
}

const StyledDates = styled.div`
  grid-column-start: 2;
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(60, 3.2rem);

  p{
    background-color: purple;
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