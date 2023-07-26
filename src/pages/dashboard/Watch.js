import React from 'react'
import { WatchCards } from '../../components'
import styled from 'styled-components'

export default function Watch() {
  return (
    <Wrapper className='nasted-box'>
        <WatchCards/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin-top: 65px;
@media screen and (max-width:992px) {
  margin: 0;
  margin-top: 90px;
}

`