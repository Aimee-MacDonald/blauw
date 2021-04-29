import React from 'react'
import styled from 'styled-components'

import TempModal from './modals/TempModal'

const ModalLayer = () => (
  <StyledModalLayer as='div'>
    <TempModal />
  </StyledModalLayer>
)

const StyledModalLayer = styled.section`
  background-color: blue;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ModalLayer