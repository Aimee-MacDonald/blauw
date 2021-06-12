import React from 'react'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'

export const RemoveRoom = props => (
  <div>
    <h1>Remove Room</h1>
    <button onClick={() => props.dispatch(setModal())}>Cancel</button>
    <button>Remove</button>
  </div>
)

export default connect()(RemoveRoom)