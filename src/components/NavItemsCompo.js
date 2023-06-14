import React from 'react'
import styled from 'styled-components'
import {homeIcon, notificationIcon, addIcon, bookmarkedIcon, settingsIcon} from "../assets/icons/index"
import { NavItemCompo} from './index'



export default function NavItemsCompo() {

  return (
  <Items className="navbar_items">
    <NavItemCompo icon={homeIcon} title='Home' altText="Home icon" link="/"/>
    <NavItemCompo icon={notificationIcon} title='Notification' altText="notificationIcon" link="/"/>
    <NavItemCompo icon={addIcon} title='Add a Post' altText="addIcon" link="/create-post"/>
    <NavItemCompo icon={bookmarkedIcon} title='Bookmark' altText="bookmarkedIcon" link="/"/>
    <NavItemCompo icon={settingsIcon} title='Settings' altText="settingsIcon" link="/settings"/>
  </Items>
  )
}


const Items = styled.div`
      display: flex;
      justify-content: center ;
      align-items: center ;
`;