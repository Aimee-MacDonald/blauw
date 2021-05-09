import React, {createContext} from 'react'
import io from 'socket.io-client'

const ServerConnectionContext = createContext(null)

export {ServerConnectionContext}

export default ({children}) => {
  let socket
  let connection

  const test = () => {
    console.log('Testing Context')
    socket.emit('test', 'It works!')
  }

  if(!socket){
    socket = io.connect('http://localhost:8080')

    socket.on('connect', () => console.log('Socket Connection!'))
    socket.on('test', msg => console.log(msg))

    connection = {
      socket: socket,
      test
    }
  }

  return(
    <ServerConnectionContext.Provider value={connection}>
      {children}
    </ServerConnectionContext.Provider>
  )
}