import React, {useRef, useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/Styles/SmallSidebarWrapper'

import {
  homeLight,
  bookmarkLight,
  addSquareLight, 
  clipshotLight,
  watchLight,
  redoosLight,
} from "../assets/icons/index"

import NavLinks from './NavLinks';
// import {Icon} from './index'


library.add(far);

export default function SmallSidebar() {

  const {isMenuOpen, toggleOverly,closeDropdownOverly} = useAppContext()
  const menuRef = useRef(null)

  const handelClickOutside = (event)=>{
    if(menuRef.current && !menuRef.current.contains(event.target)){
      closeDropdownOverly();

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
      <div className='content'>
          <NavLinks toggleOverly={toggleOverly}/>
        </div>
      </div>

    </Wrapper>
  )

}

// const Wrapper = styled.div`
//    background-color: orange;
//    width: 100%;
//   .sidebar-container{
//     position: fixed;
//     left: 0;
//     top:54px;
//     bottom: 0;
//    box-shadow: var(--box-shadow);

//     border: 1px soild black;
//     background-color: rgba(255, 255, 255, 1); 
//     display: flex;
//     flex-direction: column;
//     padding:10px;
//     z-index: 300;
//     transition: all .3s ease-in-out;

//     @media screen and (max-width : 992px){
//       display: none;
//      }
//     }
// `