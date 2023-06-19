import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { NavbarCompo, SidebarCompo, SideBar } from "../../components"

export default function SharedLayout() {
  return (
    <Wrapper>
       <NavbarCompo/>
       <SideBar/>

       {/* <SidebarCompo /> */}

      < Outlet/>
    </Wrapper>
  )
}


const Wrapper = styled.div`

`