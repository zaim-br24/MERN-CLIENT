import React from 'react'

import styled from 'styled-components'

import {CardsCompo, Cards} from './index'

export default function ContentCompo() {
  return (
    <Wrapper className='content-compo'>
        {/* <CardsCompo/> */}
        <Cards/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    /* width: 68% ; */
 

`;
