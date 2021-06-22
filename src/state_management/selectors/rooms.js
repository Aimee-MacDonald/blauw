import rooms from "../reducers/rooms"

export const getRoomGroupings = rooms => {
  let groups = []

  rooms.forEach(({_id, name, group, shared, maxPax, basePrice, personPrice, showBeds}) => {
    const groupIndex = groups.indexOf(groups.find(g => g.name === group))

    if(groupIndex === -1){
      groups.push({
        name: group,
        rooms: [{
          _id,
          name,
          shared,
          maxPax,
          basePrice,
          personPrice,
          showBeds
        }]
      })
    } else {
      groups[groupIndex].rooms.push({
        _id,
        name,
        shared,
        maxPax,
        basePrice,
        personPrice,
        showBeds
      })
    }
  })

  return groups
}

export const getDefaultRoomFlags = groups => {
  let defaultRoomsFlags = {}
  
  groups.forEach(group => {
    let rooms = {}
    group.rooms.forEach(room => {
      rooms = {
        ...rooms,
        [room.name]: false
      }
    })

    defaultRoomsFlags = {
      ...defaultRoomsFlags,
      [group.name]: {
        open: false,
        rooms
      }
    }
  })

  return defaultRoomsFlags
}