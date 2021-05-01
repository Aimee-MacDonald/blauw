import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import BookingSheet from './mains/BookingSheet'
import Checkout from './mains/Checkout'
import Stock from './mains/Stock'
import Notes from './mains/Notes'

const MainLayer = props => (
  <StyledMainLayer>
    {props.bookingSheet && <BookingSheet/>}
    {props.checkout && <Checkout/>}
    {props.stock && <Stock/>}
    {props.notes && <Notes />}
  </StyledMainLayer>
)

const StyledMainLayer = styled.div`
  background-color: purple;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
`

const mapStateToProps = ({navigation}) => ({
  ...navigation
})

export default connect(mapStateToProps)(MainLayer)