import React, {useContext} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {ServerConnectionContext} from '../../util/ServerConnection'
import {createRoom} from '../../state_management/actions/rooms'

import {setModal} from '../../state_management/actions/modal'

export const CreateRoom = props => {
  const server = useContext(ServerConnectionContext)

  const saveRoom = e => {
    e.preventDefault()

    const createRoomAction = createRoom({
      name: e.target.name.value,
      group: e.target.group.value,
      shared: e.target.shared.checked,
      maxPax: e.target.maxPax.value,
      basePrice: e.target.basePrice.value,
      personPrice: e.target.personPrice.value,
      showBeds: e.target.showBeds.checked
    })

    props.dispatch(createRoomAction)
    server.dispatch({reducer: 'rooms', action: createRoomAction})
    props.dispatch(setModal())
  }

  return(
    <StyledCreateRoom onSubmit={saveRoom}>
      <h1>Add Room</h1>

      <label htmlFor='name'>Name</label>
      <input id='name'/>

      <label htmlFor='group'>Group</label>
      <input id='group'/>

      <label htmlFor='shared'>Shared</label>
      <input id='shared' type='checkbox'/>

      <label htmlFor='maxPax'>Max Pax</label>
      <input id='maxPax'/>

      <label htmlFor='basePrice'>Base Price</label>
      <input id='basePrice'/>

      <label htmlFor='personPrice'>Person Price</label>
      <input id='personPrice'/>

      <label htmlFor='showBeds'>Show Beds</label>
      <input id='showBeds' type='checkbox'/>

      <button type='reset' onClick={() => props.dispatch(setModal())}>Cancel</button>
      <button type='submit'>Save</button>
    </StyledCreateRoom>
  )
}

const StyledCreateRoom = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.6rem;

  h1{
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom: 3.2rem;
    text-align: center;
  }

  label{
    text-align: right;
    margin-top: 0.4rem;
    padding-right: 0.8rem;
  }

  input{
    background-color: transparent;
    border: none;
    border-bottom 1px solid black;
    width: 75%;
    margin-top: 0.4rem;
  }

  button{
    padding: 0.4rem;
    margin: 3.2rem 0.1rem 0 0.2rem;
  }
`

export default connect()(CreateRoom)