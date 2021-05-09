import React, {useContext} from 'react'
import styled from 'styled-components'
import {ServerConnectionContext} from '../../util/ServerConnection'

const TempModal = () => {
  const connection = useContext(ServerConnectionContext)

  const testConnection = () => {
    connection.test()
  }

  return(
    <StyledTempModal>
      <h1>Temp Modal</h1>
      <button onClick={testConnection}>Test</button>
    </StyledTempModal>
  )
}

const StyledTempModal = styled.div`
  background-color: orangered;
  padding: 3.2rem
`

export default TempModal