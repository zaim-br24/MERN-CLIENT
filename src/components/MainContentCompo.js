import React from 'react'
import styled from 'styled-components'
import {ContentCompo, Recommendation} from './index'

export default function MainContentCompo() {
  return (
    <Main>
       <Recommendation/>
        <ContentCompo />
        {/* <SidebarCompo/> */}
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
  /* align-items: center; */
  /* justify-content: center; */
    /* max-width:80%;
    margin: 70px auto 10px ;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr; */

    /* @media screen and (max-width: 1200px){
      max-width:98% ;
    }
    @media screen and (max-width: 830px){
      grid-template-columns: 3fr ;
      rid-template-areas: 
      "content-compo  content-compo content-compo"
      "recommendations-compo"
    } */
 
  `