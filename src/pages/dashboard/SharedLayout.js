import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { NavItemCompo } from "../../components"

export default function SharedLayout() {
  return (
    <Wrapper>
       {/* <NavItemCompo/> */}
      < Outlet/>
    </Wrapper>
  )
}


const Wrapper = styled.div`

`