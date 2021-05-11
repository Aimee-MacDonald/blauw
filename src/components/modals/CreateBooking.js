import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setModal} from '../../state_management/actions/modal'

const CreateBooking = props => {
  const saveBooking = e => {
    e.preventDefault()
    console.log('Save Booking')
  }

  return(
    <StyledCreateBooking onSubmit={saveBooking}>
      <h1>Create Booking</h1>
      <button type='reset' onClick={() => props.dispatch(setModal(null))}>Cancel</button>
      <button type='submit'>Save</button>
    </StyledCreateBooking>
  )
}

const StyledCreateBooking = styled.form`
  background-color: lime;
`

export default connect()(CreateBooking)