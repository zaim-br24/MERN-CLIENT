import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useAppContext } from "../context/appContext";
import {
  homeLight,
  bookmarkLight,
  addSquareLight, 
  clipshotLight,
  watchLight,
  redoosLight,
} from "../assets/icons/index"

import { SideBarIcon } from './index'


library.add(far);

export default function SmallSidebar() {


  const {isMenuOpen, handelCloseMenu, handleOpenOverly} = useAppContext()
  const menuRef = useRef(null)


  const handelClickOutside = (event)=>{
    if(menuRef.current && !menuRef.current.contains(event.target)){
      handelCloseMenu();

    }
  }

  useEffect(()=>{
    document.addEventListener('click', handelClickOutside, true);
    return ()=>{
      document.removeEventListener('click', handelClickOutside, true)
    }
  })

  return (
    <Wrapper  isOpened={isMenuOpen}>
      <div className='sidebar-container'>
      <SideBarIcon id={1} path='/' src={homeLight}/>
      <SideBarIcon id={2} path='/redoos' src={redoosLight}/>
      <SideBarIcon id={3} path='/clipshots' src={clipshotLight}/>
      <SideBarIcon id={4} path='/watch' src={watchLight}/>
      <SideBarIcon id={5} src={addSquareLight} handleClick={handleOpenOverly}/>
      <SideBarIcon id={6} path='/' src={bookmarkLight}/>

      </div>

    </Wrapper>
  )

}

const Wrapper = styled.div`
   /* width: 50px; */
   background-color: orange;
   width: 100%;
  .sidebar-container{
    position: fixed;
    left: 0;
    top:54px;
    bottom: 0;
    /* width: 220px; */
   box-shadow: var(--box-shadow);

    border: 1px soild black;
    background-color: rgba(255, 255, 255, 1); 
    /* backdrop-filter: blur(10px);     */
    display: flex;
    flex-direction: column;
    padding:10px;
    z-index: 300;
    transition: all .3s ease-in-out;
    /* display: ${props => props.isOpened? 'block' : "none" }; */

    @media screen and (max-width : 992px){
      display: none;
     }
    }
`