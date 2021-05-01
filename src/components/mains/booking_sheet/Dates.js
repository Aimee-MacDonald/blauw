import React from 'react'
import styled from 'styled-components'

import {formatDate} from '../../../util/util'

export default class Dates extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentDate: undefined,
      focusDate: undefined,
      visibleDates: []
    }
  }

  render(){
    return(
      <StyledDates>
        {this.state.currentDate && <h1>{this.state.currentDate.day}</h1>}
        {this.state.currentDate && <h2>{`${this.state.currentDate.date} / ${this.state.currentDate.month} / ${this.state.currentDate.year}`}</h2>}
        {this.state.visibleDates && <ul>{this.state.visibleDates.map(date => (
          <DateHeading
            date={date}
            key={`k${date.date}`}
            focusDate={this.state.focusDate}
          />
        ))}</ul>}
      </StyledDates>
    )
  }

  componentDidMount(){
    let dateObject = new Date()

    const currentDate = formatDate(dateObject)
    const focusDate = new Date()
    let visibleDates = []

    dateObject.setDate(focusDate.getDate() - 14)
    for(let i = 0; i < 29 ; i++){
      visibleDates.push(formatDate(dateObject))
      dateObject.setDate(dateObject.getDate() + 1)
    }

    this.setState(() => ({
      currentDate,
      focusDate,
      visibleDates
    }))
  }
}

const StyledDates = styled.div`
  display: flex;
  flex-flow: nowrap column;
  align-items: center;

  > ul{
    display: flex;
    flex-flow: nowrap row;
    overflow-x: hidden
  }
`

const DateHeading = ({date, focusDate}) => (
  <StyledDateHeading selected={formatDate(focusDate).date === date.date ? true : false}>
    <p>{date.day}</p>
    <h2>{date.date}</h2>
    <p>{date.month}</p>
  </StyledDateHeading>
)

const StyledDateHeading = styled.div`
  display: flex;
  flex-flow nowrap column;
  align-items: center;
  background-color: ${props => props.selected ? 'lightgreen' : 'pink'};
  min-width: 6.4rem;
  margin: 0 0.5px;
  padding: 0.4rem 0;
`