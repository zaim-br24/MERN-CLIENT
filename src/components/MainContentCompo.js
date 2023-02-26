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
    max-width:90% ;
    margin: 20px auto ;

  
`;