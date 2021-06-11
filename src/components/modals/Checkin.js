import React from 'react'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'

export const Checkin = props => (
  <div>
    <h1>Check this booking in?</h1>
    <button>Yes</button>
    <button onClick={() => props.dispatch(setModal())}>No</button>
  </div>
)

export default connect()(Checkin)