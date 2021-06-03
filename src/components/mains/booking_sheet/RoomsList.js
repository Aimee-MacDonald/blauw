import React, {useState} from 'react'
import styled from 'styled-components'

const RoomsList = () => {
  const roomdata = [{
    roomName: 'camping',
    groupName: 'Camping',
    maxPax: 80
  }, {
    roomName: 'safari_tent_1',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_2',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_3',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_4',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_5',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_6',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_7',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_8',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_9',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_10',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_11',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'safari_tent_12',
    groupName: 'Safari Tents',
    maxPax: 2
  }, {
    roomName: 'dove_left',
    groupName: 'Dove',
    maxPax: 4
  }, {
    roomName: 'dove_middle',
    groupName: 'Dove',
    maxPax: 3
  }, {
    roomName: 'dove_right',
    groupName: 'Dove',
    maxPax: 4
  }, {
    roomName: 'loerie_left',
    groupName: 'Loerie',
    maxPax: 2
  }, {
    roomName: 'loerie_right',
    groupName: 'Loerie',
    maxPax: 2
  }, {
    roomName: 'loerie_family',
    groupName: 'Loerie',
    maxPax: 4
  }, {
    roomName: 'owl_left',
    groupName: 'Owl',
    maxPax: 2
  }, {
    roomName: 'owl_lounge',
    groupName: 'Owl',
    maxPax: 5
  }, {
    roomName: 'owl_right',
    groupName: 'Owl',
    maxPax: 2
  }, {
    roomName: 'dove_dorm',
    groupName: 'Dorms',
    maxPax: 8
  }, {
    roomName: 'forest_house',
    groupName: 'Dorms',
    maxPax: 7
  }, {
    roomName: 'forest_house_2',
    groupName: 'Dorms',
    maxPax: 11
  }, {
    roomName: 'loerie_dorm',
    groupName: 'Dorms',
    maxPax: 7
  }, {
    roomName: 'owl_dorm',
    groupName: 'Dorms',
    maxPax: 9
  }]

  let groups = []

  roomdata.forEach(room => {
    const groupIndex = groups.indexOf(groups.find(g => g.groupName === room.groupName))

    if(groupIndex === -1){
      groups.push({
        groupName: room.groupName,
        rooms: [{
          roomName: room.roomName,
          maxPax: room.maxPax
        }]
      })
    } else {
      groups[groupIndex].rooms.push({
        roomName: room.roomName,
        maxPax: room.maxPax
      })
    }
  })

  let defaultGroupFlags = []
  groups.forEach(({groupName, rooms}) => {
    let roomFlags = {}
    rooms.forEach(room => roomFlags = {
      ...roomFlags,
      [room.roomName]: false
    })

    defaultGroupFlags = {
      ...defaultGroupFlags,
      [groupName]: {
        open: false,
        rooms: roomFlags
      }
    }
  })

  const [groupFlags, setGroupFlags] = useState(defaultGroupFlags)
  
  return(
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
}

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

export default RoomsList