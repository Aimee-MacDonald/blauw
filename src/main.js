import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {Provider} from 'react-redux'

import createStore from './state_management/createStore'
import ServerConnectionProvider from './util/ServerConnection'

import GlobalStyle from './GlobalStyle'
import MainLayer from './components/MainLayer'
import ControlLayer from './components/ControlLayer'
import ModalLayer from './components/ModalLayer'

const store = createStore()

const MainComponent = () => (
  <Provider store={store}>
    <ServerConnectionProvider>
      <StyledMainComponent as='div'>
        <GlobalStyle />
        <MainLayer />
        <ControlLayer />
        <ModalLayer />
      </StyledMainComponent>
    </ServerConnectionProvider>
  </Provider>
)

const StyledMainComponent = styled.section`
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<MainComponent />, document.getElementById('root'))