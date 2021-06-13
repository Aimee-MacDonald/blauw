import React from 'react'
import {connect} from 'react-redux'

import {setModal} from '../../state_management/actions/modal'

export const EditRoom = props => (
  <div>
    <h1>Edit Room</h1>

    <button onClick={() => props.dispatch(setModal())}>Cancel</button>
    <button>Save</button>
  </div>
)

export default connect()(EditRoom)