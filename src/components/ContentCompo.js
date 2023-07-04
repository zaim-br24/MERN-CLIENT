import React from 'react'

import styled from 'styled-components'

import {Cards, ClipShotsCards} from './index'

export default function ContentCompo() {
  return (
    <Wrapper className='content-compo'>
        {/* <CardsCompo/> */}
        <div className='category-title'><p>Top Recent Reedo.</p></div>
        <Cards/>
        <div className='category-title'><p>Top Recent ClipShots.</p></div>
        <ClipShotsCards/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    /* width: 68% ; */
    margin-top: 40px;
    .category-title{
      margin: 20px 0;
      p{
      font-size: 1.5rem;
      color: rgba(0, 0, 0, .8.2);
      font-weight: 600;
    }
    }
   
`;
