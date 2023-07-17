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
  margin: 65px 10px;
  margin-left: 90px;
  padding: 5px;
  

  
  @media screen and (max-width : 900px){
       margin: 71px 20px 20px 20px;
     }

 
  `