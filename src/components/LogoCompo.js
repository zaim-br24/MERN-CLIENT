import React from 'react'
import styled from 'styled-components'


export default function LogoCompo() {
  return (
    <Logo>
        {/* Aicha Hassi */}
        <p>Backdoor</p>
        
    </Logo>
  )
}


const Logo = styled.div`
     /* color: var(--heading-color) ; */
    p{
     background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
     background-clip: text;
    -webkit-background-clip: text;
     color: transparent;
     font-size:2rem ;
     font-weight:800 ;
    }
  
`;