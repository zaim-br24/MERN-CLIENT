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

export default function SideBar() {


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


      {/* <div> <Link to="/"><img className='icon' src={homeLight}></img></Link></div>
      <div> <Link to="/"><img className='icon' src={redoosLight}></img></Link></div>
      <div> <Link to=""><img className='icon' src={clipshotLight}></img></Link></div>
      <div> <Link to="/"><img className='icon' src={watchLight}></img></Link></div>
      <div> <Link to="/create-post"><img className='icon' src={addSquareLight}></img></Link></div>
      <div> <Link to="/"><img className='icon' src={bookmarkLight}></img></Link></div> */}
      </div>

    </Wrapper>
  )

}

const Wrapper = styled.div`

  .sidebar-container{
    position: fixed;
    left: 0;
    top:54px;
    bottom: 0;
    /* width: 220px; */
    border: 1px soild black;
    background-color: rgba(255, 255, 255, 0.5); 
    backdrop-filter: blur(10px);    
    display: flex;
    flex-direction: column;
    padding:10px;
    z-index: 300;
    transition: all .3s ease-in-out;
    /* display: ${props => props.isOpened? 'block' : "none" }; */

    @media screen and (max-width : 900px){
      display: none;
     }
    }
`