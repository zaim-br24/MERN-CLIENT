import React from 'react'
import styled from 'styled-components'
import {homeIcon, notificationIcon, addIcon, bookmarkedIcon, settingsIcon} from "../assets/icons/index"
import { NavItemCompo} from './index'

export default function NavItemsCompo() {
  return (
  <Items className="navbar_items">
    <NavItemCompo icon={homeIcon} link="/"/>
    <NavItemCompo icon={notificationIcon} link="/"/>
    <NavItemCompo icon={addIcon} link="/"/>
    <NavItemCompo icon={bookmarkedIcon} link="/"/>
    <NavItemCompo icon={settingsIcon} link="/settings"/>
  </Items>
  )
}


const Items = styled.div`
      display: flex;
      justify-content: center ;
      align-items: center ;
`;