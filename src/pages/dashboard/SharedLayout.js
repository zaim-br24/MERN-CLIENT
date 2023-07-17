import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { NavbarCompo, SideBar, Overly, Recommendation} from "../../components/index"
import { Link } from "react-router-dom"

import {
  clipshotLight,
  watchLight,
  redoosLight,
} from "../../assets/icons/index"

import { useAppContext } from "../../context/appContext";

export default function SharedLayout() {

  const {isOverlyOpen} = useAppContext()

  return (
    <Wrapper>
       <NavbarCompo/>
       <SideBar/>
       <Recommendation/>


       {/* <SidebarCompo /> */}

       {isOverlyOpen &&  <Overly>
          <Link className='create-post-btn' to="/create/clipshot"> <p>Create a Clipshot</p> <img className="icon" alt="clipshot" src={clipshotLight}></img></Link>
          <Link className='create-post-btn' to='/create/watch'> <p>Post a Video</p> <img className="icon" alt="watch" src={watchLight}></img></Link>
          <Link className='create-post-btn' to="/create/redoo"> <p>Write a Redoo</p> <img className="icon" alt="redoo" src={redoosLight}></img></Link>

        </Overly>}
      < Outlet/>
    </Wrapper>
  )
}


const Wrapper = styled.div`

.create-post-btn{
  display: flex;
  flex-direction: column;
  padding: 10px;
  outline: 1px solid  rgb(35, 165, 213);
  border-radius: 10px;
  margin: 0 5px;
  p{
    font-weight: 600;
  }
  :hover{
    outline: 2px solid rgb(35, 165, 213);
  }
  img{
    width: 40px;
    margin: 10px auto;
  }
}
`