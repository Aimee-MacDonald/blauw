import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {ServerConnectionContext} from '../util/ServerConnection'

import {getMainsFlags} from '../state_management/selectors/navigation'

import BookingSheet from './mains/booking_sheet/BookingSheet'
import Checkout from './mains/Checkout'
import Stock from './mains/Stock'
import Notes from './mains/Notes'
import EditRoomsList from './mains/EditRoomsList'

export const MainLayer = props => {
  const connection = useContext(ServerConnectionContext)

  useEffect(() => {
    connection.dispatch({reducer: 'bookings', action: {type: 'REFRESH_BOOKINGS'}})
  }, [])

  return(
    <StyledMainLayer>
      {props.bookingSheet && <BookingSheet/>}
      {props.checkout && <Checkout/>}
      {props.stock && <Stock/>}
      {props.notes && <Notes/>}
      {props.editRoomsList && <EditRoomsList/>}
    </StyledMainLayer>
  )
}

const StyledMainLayer = styled.div`
  background-color: purple;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
`

const mapStateToProps = ({navigation}) => (getMainsFlags(navigation))

export default connect(mapStateToProps)(MainLayer)