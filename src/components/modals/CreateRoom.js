import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {setModal} from '../../state_management/actions/modal'

export const CreateRoom = props => (
  <StyledCreateRoom>
    <h1>Add Room</h1>

    <label htmlFor='name'>Name</label>
    <input id='name'/>

    <label htmlFor='group'>Group</label>
    <input id='group'/>

    <label htmlFor='minPax'>Min Pax</label>
    <input id='minPax'/>

    <label htmlFor='maxPax'>Max Pax</label>
    <input id='maxPax'/>

    <button onClick={() => props.dispatch(setModal())}>Cancel</button>
    <button>Save</button>
  </StyledCreateRoom>
)

const StyledCreateRoom = styled.div`
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