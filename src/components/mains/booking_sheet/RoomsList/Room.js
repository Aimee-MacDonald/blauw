import React from 'react'

export const Room = props => {
  const beds = []

  if(props.room.showBeds){
    for(let i = 0; i < props.room.maxPax; i++){
      beds.push(`Bed ${i + 1}`)
    }
  }

  return(
    <div>
      <h3 onClick={props.toggleRoom}>{props.room.name}</h3>
      {props.room.showBeds && props.roomFlag &&
        beds.map((bed, i) => <p key={`${props.room._id}_${i}`}>{bed}</p>)
      }
    </div>
  )
}

export default Room