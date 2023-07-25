import React from 'react'
import styled from 'styled-components'

import {NavbarCompo, MainContentCompo} from '../components/index'

export default function Landing() {
  return (
    <Wrapper>
      {/* <NavbarCompo /> */}
      <MainContentCompo />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  /* margin: 70px auto 10px ; */
  position: absolute;
  top: 40px;
  left: 80px;
  right: 0;
  padding: 10px;
  @media screen and (max-width : 992px){
    left:  0;    
    }
    @media screen and (max-width : 900px){
      top: -30px;
     }
`;
