import React from 'react'

import Room from './Room'

export const RoomGroup = props => (
  <div>
    {props.group && props.group.name !== 'ungrouped' &&
      <h3 onClick={props.toggleGroup}>{props.group.name}</h3>
    }

    {props.groupFlags && props.groupFlags.open && props.group.rooms.map(room => (
      <Room
        key={room._id}
        room={room}
        roomFlag={props.groupFlags.rooms[room.name]}
        toggleRoom={() => props.toggleRoom(room.name)}
      />
    ))}
  </div>
)

export default RoomGroup