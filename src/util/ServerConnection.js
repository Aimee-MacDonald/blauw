import React, {createContext} from 'react'
import io from 'socket.io-client'

import {store} from '../state_management/createStore'

export default ({children}) => {
  let socket
  let connection

  const dispatch = ({reducer, action}) => {
    socket.emit(reducer, action)
  }

  if(!socket){
    socket = io.connect('http://localhost:8080')
    socket.on('connect', () => console.log('Socket Connection!'))
    socket.on('dispatchAction', action => store.dispatch(action))

    connection = {
      socket: socket,
      dispatch
    }
  }

  return(
    <ServerConnectionContext.Provider value={connection}>
      {children}
    </ServerConnectionContext.Provider>
  )
}

const ServerConnectionContext = createContext(null)
export {ServerConnectionContext}