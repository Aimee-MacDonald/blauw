import React from 'react'
import styled from 'styled-components'

const Dates = () => {
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  return(
    <StyledDates>
      {dates.map(date => <p key={date}>{date}</p>)}
    </StyledDates>
  )
}

const StyledDates = styled.div`
  display: grid;
  grid-template-columns: repeat(30, 1fr);

  p{
    background-color: purple;
    text-align: center;
    padding: 0.4rem 0;
    font-weight: bold;
    font-size: 16pt;
  }
`

export default Dates