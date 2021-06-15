import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import CreateBooking from './modals/CreateBooking/CreateBooking'
import DeleteBooking from './modals/DeleteBooking'
import EditBooking from './modals/EditBooking'
import Checkin from './modals/Checkin'
import Checkout from './modals/Checkout'
import CreateRoom from './modals/CreateRoom'
import RemoveRoom from './modals/RemoveRoom'
import EditRoom from './modals/EditRoom'
import UndoCheckout from './modals/UndoCheckout'

export const ModalLayer = props => (
  <StyledModalLayer {...props}>
    {props.activeModal === 'createBooking' && <CreateBooking />}
    {props.activeModal === 'deleteBooking' && <DeleteBooking _id={props._id} />}
    {props.activeModal === 'editBooking' && <EditBooking _id={props._id}/>}
    {props.activeModal === 'checkin' && <Checkin/>}
    {props.activeModal === 'checkout' && <Checkout/>}
    {props.activeModal === 'createRoom' && <CreateRoom/>}
    {props.activeModal === 'removeRoom' && <RemoveRoom/>}
    {props.activeModal === 'editRoom' && <EditRoom/>}
    {props.activeModal === 'undoCheckout' && <UndoCheckout/>}
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