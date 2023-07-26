import React from 'react'
import styled from 'styled-components'
import { ClipShotsCards } from '../../components'
export default function Clipshots() {
  return (
    <Wrapper className='nasted-box'>
      <ClipShotsCards/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* margin-top: 65px; */
  `