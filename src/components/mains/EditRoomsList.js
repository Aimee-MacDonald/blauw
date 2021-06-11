import React, {useState} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {getDefaultRoomFlags, getRoomGroupings} from '../../state_management/selectors/rooms'

import RoomsList from './booking_sheet/RoomsList'

export const EditRoomsList = ({groups}) => {
  const [groupFlags, setGroupFlags] = useState(getDefaultRoomFlags(groups))

  return(
    <StyledEditRoomsList>
      <div/>
      <RoomsList
        id = 'rooms_list'
        groups = {groups}
        groupFlags = {groupFlags}
        setGroupFlags = {setGroupFlags}
      />
    </StyledEditRoomsList>
  )
}

const StyledEditRoomsList = styled.div`
  background-color: lime;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const mapStateToProps = ({rooms}) => ({groups: getRoomGroupings(rooms)})

export default connect(mapStateToProps)(EditRoomsList)