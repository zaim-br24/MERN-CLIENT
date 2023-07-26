import React from 'react'
import styled from 'styled-components'

import {MainContentCompo} from '../components/index'

export default function Landing() {
  return (
    <Wrapper className='nasted-box'>
      <MainContentCompo />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  @media screen and (max-width : 992px){
    left:  0;    
    }
    @media screen and (max-width : 900px){
      top: -30px;
     }
`;
