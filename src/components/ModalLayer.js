import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import TempModal from './modals/TempModal'
import CreateBooking from './modals/CreateBooking'

const ModalLayer = props => (
  <StyledModalLayer {...props}>
    <CreateBooking />
  </StyledModalLayer>
)

const StyledModalLayer = styled.div`
  background-color: ${props => props.modalActive ? 'hotpink' : 'transparent'};
  position: fixed;
  z-index: 2;
  width: 100%;
  height: ${props => props.modalActive ? '100%' : '0'};
  overflow: hidden;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
`

const mapStateToProps = ({modal}) => ({
  modalActive: !!modal.activeModal
})

export default connect(mapStateToProps)(ModalLayer)