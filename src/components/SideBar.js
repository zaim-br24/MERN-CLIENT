import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useAppContext } from "../context/appContext";
import {homeLight,homesolid, bookmarkLight,bookmarsolid,addSquareLight, addSquaresolid} from "../assets/icons/index"


library.add(far);

export default function SideBar() {

  const {isMenuOpen, handelCloseMenu} = useAppContext()
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
      <div> <Link to="/"><img className='icon' src={homeLight}></img></Link></div>
      <div> <Link to="/create-post"><img className='icon' src={addSquareLight}></img></Link></div>
      <div> <Link to="/"><img className='icon' src={bookmarkLight}></img></Link></div>

          {/* <div><FontAwesomeIcon className='icon' icon={faHouse} /> <Link to="/"></Link></div>
          <div><FontAwesomeIcon className='icon' icon={faSearch}  /> <Link to="/"></Link></div>
          <div><FontAwesomeIcon className='icon' icon={faPlus} /> <Link to="/create-post"></Link></div>
          <div><FontAwesomeIcon className='icon' icon={['far', 'bookmark']} /><Link to="/bookmarked"></Link></div> */}
      </div>

    </Wrapper>
  )

}

const Wrapper = styled.div`
    background-color: orange;
    width:    600px;
  .sidebar-container{
    position: fixed;
    left: 0;
    top:54px;
    bottom: 0;
    /* width: 220px; */
    background-color: rgba(255, 255, 255, 0.5); 
    backdrop-filter: blur(10px);    
    border-right: 1px soild var(--border-color);
    display: flex;
    flex-direction: column;
    padding:10px;
    z-index: 300;
    transition: all .3s ease-in-out;
    display: ${props => props.isOpened? 'block' : "none" };

    div{
      :first-child{
      background-color: whitesmoke;
      }
      width: 60px;
      padding: 10px;
      margin: 5px 0 ;
      border-radius: 10px;
      transition: all .2s ease-in;
      display: flex;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color: whitesmoke;

      }
      a{
        font-weight: 600;
        width: 70%;
      }
      .icon{
        width: 35px;
        color: black;
      }
    }
    @media screen and (max-width : 900px){
      display: none;
     }
    }
`