import React from 'react'
import {connect} from 'react-redux'

export const Notes = props => (
  <div>
    <h1>Notes</h1>
    {props.notes && props.notes.map((note, i) => <h3 key={`${note.title}_${i}`}>{note.title}</h3>)}
  </div>
)

const mapStateToProps = ({notes}) => ({notes})

export default connect(mapStateToProps)(Notes)