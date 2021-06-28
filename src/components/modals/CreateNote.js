import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'
import {createNote} from '../../state_management/actions/notes'

export const CreateNote = props => {
  const addNote = e => {
    e.preventDefault()

    const note = {
      title: e.target.title.value,
      content: e.target.content.value
    }

    props.dispatch(createNote(note))
    props.dispatch(setModal())
  }

  return(
    <StyledCreateNote onSubmit={addNote}>
      <h1>Create Note</h1>

      <label htmlFor='title'>Title</label>
      <input id='title'/>

      <textarea id='content'/>

      <button type='button' onClick={() => props.dispatch(setModal())}>Cancel</button>
      <button type='submit'>Save</button>
    </StyledCreateNote>
  )
}

const StyledCreateNote = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1, textarea{
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

export default connect()(CreateNote)