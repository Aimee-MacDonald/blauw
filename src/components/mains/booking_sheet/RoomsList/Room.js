import React from 'react'
import styled from 'styled-components'

export const Room = props => {
  const beds = []

  if(props.room.showBeds){
    for(let i = 0; i < props.room.maxPax; i++){
      beds.push(`Bed ${i + 1}`)
    }
  }

  return(
    <StyledRoom {...props}>
      <h3 onClick={props.toggleRoom}>{props.room.name}</h3>

      {props.room.showBeds && props.roomFlag &&
        beds.map((bed, i) => {
          const bedId = `${props.room._id}_${i}`

          return(
            <StyledBed key={bedId} {...props} bedId={bedId}>
              <h3>{bed}</h3>
            </StyledBed>
          )
        })
      }
    </StyledRoom>
  )
}

const StyledRoom = styled.div`
  background-color: ${props => props.room._id === props.hoveredRoom ? 'cornflowerblue' : 'hotpink'};
`

const StyledBed = styled.div`
  background-color: ${props => props.bedId === props.hoveredRoom ? 'cornflowerblue' : "hotpink"};
`

export default Room