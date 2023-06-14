import React from 'react'
import styled from 'styled-components'
import {ContentCompo, SidebarCompo} from './index'

export default function MainContentCompo() {
  return (
    <Main>
        <ContentCompo/>
        <SidebarCompo />
    </Main>
  )
}


const Main = styled.div`
    display: flex;
    /* align-items:center ; */
    justify-content: space-between ;
    max-width:70% ;
    margin-left: 16rem;
    margin-top: 6rem;
    @media screen and (max-width: 1200px){
      max-width:90% ;
    }
 
  `