import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {getDefaultRoomFlags, getRoomGroupings, getHoveredRoom} from '../../../../state_management/selectors/rooms'

import RoomGroup from './RoomGroup'

export const RoomsList = ({groups, groupFlags, setGroupFlags, hoveredCell}) => {
  useEffect(() => setGroupFlags(getDefaultRoomFlags(groups)), [groups])

  const toggleGroup = groupName => {
    setGroupFlags({
      ...groupFlags,
      [groupName]: {
        ...groupFlags[groupName],
        open: !groupFlags[groupName].open
      }
    })
  }

  const toggleRoom = (groupName, roomName) => {
    setGroupFlags({
      ...groupFlags,
      [groupName]: {
        ...groupFlags[groupName],
        rooms: {
          ...groupFlags[groupName].rooms,
          [roomName]: !groupFlags[groupName].rooms[roomName]
        }
      }
    })
  }

  return(
    <StyledRoomsList>
      {groups.map(group => (
        <RoomGroup
          key={group.name}
          group={group}
          groupFlags={groupFlags[group.name]}
          toggleGroup={() => toggleGroup(group.name)}
          toggleRoom={roomName => toggleRoom(group.name, roomName)}
          hoveredRoom={getHoveredRoom(groups, groupFlags, hoveredCell)}
        />
      ))}
    </StyledRoomsList>
  )
}

const StyledRoomsList = styled.div`
  background-color: lime;
  height: 100%;
  overflow-y: hidden;
`

const mapStateToProps = ({rooms}) => ({groups: getRoomGroupings(rooms)})

export default connect(mapStateToProps)(RoomsList)