import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {getRoomGroupings} from '../../../state_management/selectors/rooms'

export const RoomsList = ({groups, groupFlags, setGroupFlags}) => (
  <StyledRoomsList>
    {groups.map(({groupName, rooms}) => (
      <StyledGroup key={groupName}>
        <h3 onClick={e => setGroupFlags({
          ...groupFlags,
          [groupName]: {
            ...groupFlags[groupName],
            open: !groupFlags[groupName].open
          }
        })}>{groupName}</h3>

        {groupFlags[groupName].open && rooms.map(({roomName, maxPax}) => {
          const beds = []
          for(let i = 0; i < maxPax; i++) beds.push(`Bed ${i + 1}`)

          return(
            <StyledRooms key={roomName}>
              <h3 onClick={e => setGroupFlags({
                ...groupFlags,
                [groupName]: {        
                  ...groupFlags[groupName],
                  rooms: {
                    ...groupFlags[groupName].rooms,
                    [roomName]: !groupFlags[groupName].rooms[roomName]
                  }
                }
              })}>{roomName}</h3>

              {groupFlags[groupName].rooms[roomName] && beds.map(bed => (
                <StyledBed key={`${roomName}${bed}`}>
                  <h3>{bed}</h3>
                </StyledBed>
              ))}
            </StyledRooms>
          )
        })}
      </StyledGroup>
    ))}
  </StyledRoomsList>
)

const StyledRoomsList = styled.div`
  background-color: lime;
  height: 100%;
  overflow-y: hidden;
`

const StyledGroup = styled.div`
  background-color: orangered;

  h3{
    height: 32px;
    display: grid;
    place-items: center center;
    cursor: pointer;
  }
`

const StyledRooms = styled.div`
  background-color: magenta;
`

const StyledBed = styled.div`
  background-color: violet;

  h3{
    place-items: center right;
    padding-right: 1rem;
  }
`

const mapStateToProps = ({rooms}) => ({groups: getRoomGroupings(rooms)})

export default connect(mapStateToProps)(RoomsList)