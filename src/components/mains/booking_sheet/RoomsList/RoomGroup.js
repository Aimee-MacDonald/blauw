import React from 'react'
import styled from 'styled-components'

import Room from './Room'

export const RoomGroup = props => (
  <StyledRoomGroup {...props}>
    {props.group && props.group.name !== 'ungrouped' &&
      <h3 onClick={props.toggleGroup}>{props.group.name}</h3>
    }

    {props.groupFlags && props.groupFlags.open && props.group.rooms.map(room => (
      <Room
        key={room._id}
        room={room}
        roomFlag={props.groupFlags.rooms[room.name]}
        toggleRoom={() => props.toggleRoom(room.name)}
        hoveredRoom={props.hoveredRoom}
      />
    ))}
  </StyledRoomGroup>
)

const StyledRoomGroup = styled.div`
  background-color: ${props => props.group.name === props.hoveredRoom ? 'cornflowerblue' : 'hotpink'};

  h3{
    height: 32px;
    display: grid;
    place-items: center center;
  }
`

export default RoomGroup