export const getRoomGroupings = rooms => {
  let groups = []

  rooms.forEach(room => {
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
  
  return groups
}

export const getDefaultRoomFlags = groups => {
  let defaultRoomsFlags = []

  groups.forEach(({groupName, rooms}) => {
    let roomFlags = {}
    rooms.forEach(room => roomFlags = {
      ...roomFlags,
      [room.roomName]: false
    })

    defaultRoomsFlags = {
      ...defaultRoomsFlags,
      [groupName]: {
        open: false,
        rooms: roomFlags
      }
    }
  })

  return defaultRoomsFlags
}