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
        open: group.name === 'ungrouped' ? true : false,
        rooms
      }
    }
  })

  return defaultRoomsFlags
}

export const getHoveredRoom = (groups, groupFlags, hoveredCell) => {
  const flatList = []

  groups.forEach(group => {
    if(group.name !== 'ungrouped') flatList.push(group.name)

    group.rooms.forEach(room => {
      flatList.push(room._id)

      if(room.showBeds){
        for(let i = 0; i < room.maxPax; i++){
          flatList.push(`${room._id}_${i}`)
        }
      }
    })
  })
  
  return flatList[hoveredCell - 1]
}

export const getRoomOptions = rooms => {
  return rooms.map(room => room.name)
}