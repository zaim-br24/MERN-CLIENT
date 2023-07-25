import React from 'react'
import { RedooCards } from '../../components'
import styled from 'styled-components'
export default function Redoos() {
  return (
    <Wrapper className='container-margin'>
      <RedooCards/>
    </Wrapper>
      
  )
}


const Wrapper = styled.div`
     @media screen and (max-width : 992px){
      margin: 0;
      margin-top: 70px;
     }
`
