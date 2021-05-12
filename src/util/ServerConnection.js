import React, {createContext} from 'react'
import io from 'socket.io-client'

const ServerConnectionContext = createContext(null)

export {ServerConnectionContext}

export default ({children}) => {
  let socket
  let connection

  const dispatch = ({reducer, action}) => {
    socket.emit(reducer, action)
  }

  if(!socket){
    socket = io.connect('http://localhost:8080')

    socket.on('connect', () => console.log('Socket Connection!'))

    socket.on('bookings', payload => {
      // WTF am I going to do here??
      console.log('Something about bookings?')
      console.log(payload)
    })

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