import React from 'react'
import styled from 'styled-components'


export default function LogoCompo() {
  return (
    <Logo>
        Backdoor
    </Logo>
  )
}


const Logo = styled.div`
    color: var(--heading-color) ;
     font-size:2rem ;
     font-weight:800 ;
`;