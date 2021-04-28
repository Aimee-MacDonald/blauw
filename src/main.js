import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const MainComponent = () => (
  <StyledMainComponent as='div'>
    <GlobalStyle />
    <h1>BLAUW!!</h1>
  </StyledMainComponent>
)

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }

  h1{
    margin: 0
  }
`

const StyledMainComponent = styled.section`
  background-color: purple;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

ReactDOM.render(<MainComponent />, document.getElementById('root'))