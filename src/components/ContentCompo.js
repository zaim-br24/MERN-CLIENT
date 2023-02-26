import React from 'react'
import styled from 'styled-components'
import {CardsCompo} from './index'

export default function ContentCompo() {
  return (
    <Wrapper className='content'>
        <CardsCompo/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 68% ;
    /* border: 1px solid var(--border-color) ; */
    /* border-radius:10px; */
    /* box-shadow: var(--box-shadow) ; */
    /* border: 1px solid var(--border-color) ; */
    /* border-radius:10px ; */
    /* @media (max-width: 400px){
       width:100px ;
    } */

`;
