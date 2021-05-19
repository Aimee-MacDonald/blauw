import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

const Rooms = props => {
  const roomsEl = useRef(null)
  useEffect(() => roomsEl.current.scrollTop = props.scroll)

  const rooms = [
    'Camping 1',
    'Camping 2',
    'Camping 3',
    'Camping 4',
    'Camping 5',
    'Camping 6',
    'Camping 7',
    'Camping 8',
    'Camping 9',
    'Camping 10',
    'Camping 11',
    'Camping 12',
    'Camping 13',
    'Camping 14',
    'Camping 15',
    'Camping 16',
    'Camping 17',
    'Camping 18',
    'Camping 19',
    'Camping 20',
    'Camping 21',
    'Camping 22',
    'Camping 23',
    'Camping 24',
    'Camping 25',
    'Camping 26',
    'Camping 27',
    'Camping 28',
    'Camping 29',
    'Camping 30',
    'Camping 31',
    'Camping 32',
    'Camping 33',
    'Camping 34',
    'Camping 35',
    'Camping 36',
    'Camping 37',
    'Camping 38',
    'Camping 39',
    'Camping 40',
    'Camping 41',
    'Camping 42',
    'Camping 43',
    'Camping 44',
    'Camping 45',
    'Camping 46',
    'Camping 47',
    'Camping 48',
    'Camping 49',
    'Camping 50',
    'Camping 51',
    'Camping 52',
    'Camping 53',
    'Camping 54',
    'Camping 55',
    'Camping 56',
    'Camping 57',
    'Camping 58',
    'Camping 59',
    'Camping 60',
    'Camping 61',
    'Camping 62',
    'Camping 63',
    'Camping 64',
    'Camping 65',
    'Camping 66',
    'Camping 67',
    'Camping 68',
    'Camping 69',
    'Camping 70',
    'Camping 71',
    'Camping 72',
    'Camping 73',
    'Camping 74',
    'Camping 75',
    'Camping 76',
    'Camping 77',
    'Camping 78',
    'Camping 79',
    'Camping 80'
  ]
  
  return(
    <StyledRooms ref={roomsEl}>
      {rooms.map((room, i) => <StyledRoom key={i} hoveredCell={props.hoveredCell === i + 1}><p>{room}</p></StyledRoom>)}
    </StyledRooms>
  )
}

const StyledRooms = styled.div`
  height: 100%;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(80, 32px);
`

const StyledRoom = styled.div`
  background-color: ${props => props.hoveredCell ? 'lime' : 'purple'};
  display: flex;
  align-items: center;

  p{
    padding-left: 0.4rem;
  }
`

export default Rooms