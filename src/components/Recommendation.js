import React from 'react'
import styled from 'styled-components'

export default function SidebarCompo() {
  return (
    <Wrapper className='recommendations-compo'>
      recommendations
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    border: 1px solid var(--border-color) ;

    padding: 10px ;
    background-color: rgba(255, 255, 255, 0.5); 
    backdrop-filter: blur(10px);
    position: fixed;
    top: 54px;
    right: -80px;
    z-index: 90;
    /* background-color: #fff; */
    margin: 0 auto;
`;