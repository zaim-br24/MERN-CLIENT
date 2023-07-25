import React from 'react'
import styled from 'styled-components'
import {ContentCompo} from './index'

export default function MainContentCompo() {

  return (
    <Main>
        <ContentCompo />        
    </Main>
  )
}


const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /*  */
  padding: 5px;
  

  
  @media screen and (max-width : 900px){
       margin: 71px 5px 5px 5px;
     }

 
  `