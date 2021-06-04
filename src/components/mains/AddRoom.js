import React from 'react'
import styled from 'styled-components'

import RoomsList from './booking_sheet/RoomsList'

const AddRoom = () => (
  <StyledAddRoom>
    <StyledEditSection>
      <form>
        <label>Name</label>
        <input/>

        <label>Group</label>
        <input/>

        <label>Max Pax</label>
        <input/>

        <button>Cancel</button>
        <button>Add Room</button>
      </form>
    </StyledEditSection>

    <RoomsList />
  </StyledAddRoom>
)

const StyledAddRoom = styled.div`
  display: grid;
  grid-template-columns: 64% 1fr;
  height: 100%;
`

const StyledEditSection = styled.div`
  display: grid;
  place-items: center center;

  form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
  }

  form label{
    text-align: right;
  }
`

export default AddRoom