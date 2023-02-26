import React from 'react'
import styled from 'styled-components'

import {NavbarCompo, MainContentCompo} from '../components/index'

export default function Landing() {
  return (
    <Wrapper>
      <NavbarCompo />
      <MainContentCompo />
    </Wrapper>
  )
}


const Wrapper = styled.div`

`;