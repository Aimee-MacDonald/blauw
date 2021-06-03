export const getRoomGroupings = state => {
  let groups = []

  state.forEach(room => {
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