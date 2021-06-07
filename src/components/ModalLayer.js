import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import CreateBooking from './modals/CreateBooking'
import DeleteBooking from './modals/DeleteBooking'
import EditBooking from './modals/EditBooking'

export const ModalLayer = props => (
  <StyledModalLayer {...props}>
    {props.activeModal === 'createBooking' && <CreateBooking />}
    {props.activeModal === 'deleteBooking' && <DeleteBooking _id={props._id} />}
    {props.activeModal === 'editBooking' && <EditBooking _id={props._id}/>}
  </StyledModalLayer>
)

const StyledModalLayer = styled.div`
  background-color: ${props => props.modalActive ? 'hotpink' : 'transparent'};
  position: fixed;
  z-index: 30;
  width: 100%;
  height: ${props => props.modalActive ? '100%' : '0'};
  overflow: hidden;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
`

const mapStateToProps = ({modal, bookings}) => ({
  modalActive: !!modal.activeModal,
  activeModal: modal.activeModal,
  _id: bookings.selectedBooking
})

export default connect(mapStateToProps)(ModalLayer)