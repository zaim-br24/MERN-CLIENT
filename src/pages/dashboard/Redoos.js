import React from 'react'
import { RedooCards } from '../../components'
import styled from 'styled-components'
export default function Redoos() {
  return (
    <Wrapper className='nasted-box'>
      <RedooCards/>
    </Wrapper>
      
  )
}


const Wrapper = styled.div`
     margin-top: 40px;
     @media screen and (max-width : 992px){
      margin: 0;
      margin-top: 70px;
     }
`
