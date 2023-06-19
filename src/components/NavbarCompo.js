import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown, faArrowRightFromBracket,faGear} from '@fortawesome/free-solid-svg-icons'
import { NavItemsCompo , LogoCompo, ButtonCompo, SideBar,DropdownMenu } from './index';
// import {Logout} from '../pages/index'
import {searchIcon} from "../assets/icons/index"
import { useAppContext } from '../context/appContext.js'
import { Link } from 'react-router-dom';


export default function NavbarCompo() {
  const {userRegistered, handelCloseMenu, handelOpenMenu, isDropdownOpen} = useAppContext()

  // const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState(false);
  const dropdownRef = useRef(null)


  const toggleDropdown = () => {
    // setIsOpen(!isOpen);
    if(isDropdownOpen){
      handelCloseMenu();
    }else{
      handelOpenMenu();
    }
    setIsRotate(!isRotate);
  };

  const handelClickOutside = (event)=>{
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
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
    <Nav  ref={dropdownRef}>
       {/* <SideBar/> */}
      <LogoCompo />
      
       <div className="nav_search_box">
        <div className="search_icon">
          <img src={searchIcon} alt="" />
        </div>
           <input type="text" className="nav_input_search" placeholder='search' />
       </div> 
       {/* <NavItemsCompo className="navbar-icons"/> */}
      
       {
        !userRegistered ? <ButtonCompo type="click" text='register' link='/register'/> 
        : 
      <div className='profile-container' onClick={toggleDropdown}>
        
          <FontAwesomeIcon className='icon' icon={faUser} />
           <p className='user-profile-name'>Zaim</p>
         

            <button onClick={toggleDropdown}><FontAwesomeIcon className={`icon ${isRotate && "rotate"}`} icon={faCaretDown} /></button>
          
          {
          isDropdownOpen && < DropdownMenu>
             <Link to="/profile"> <FontAwesomeIcon icon={faUser} /> Profile</Link>
             <Link to="/settings"><FontAwesomeIcon icon={faGear} /> Settings</Link>
             <Link to="/logout"> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</Link>
          </DropdownMenu>
          }
      </div>

       }
    </Nav>
  )
}



const Nav = styled.nav`
   display:flex ;
   justify-content: space-between;
   align-items: center ;
   padding:5px  1.5rem;
   background-color: var( --primary-bg-color) ;
   
   border-bottom: 1px solid var(--border-color);
   width: 100%;
   /* height: 60px; */
   top: 0;
   z-index: 100;
   position: fixed;
   
   .icon{
    font-size:  23px;
    color: var( --font-color);
    cursor: pointer;
   }
   .profile-container {
    background-color: var(--secondary-bg-color);
    cursor: pointer;
    border-radius: 20px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    button{
      background: none;
      border: none;
      outline: none;
      margin-left: 5px;

      .rotate{
        transform: rotate(180deg);
      }
    }
   }
  
   p{
      font-size: 16px;
      font-weight: 500;
      margin-left: 5px;
    }

   .nav_search_box{
    display: flex ;
    align-items: center ;
    width:40%  ;
    border: 1px solid var(--border-color) ;
    padding: 6px 10px;
    border-radius:20px ;

    @media screen and (max-width : 1000px){
      display: none;
     }

    .search_icon{
      width: 10% ;
      border-right: 1px solid var(--border-color) ;
      cursor: pointer;
      img{
        width: 18px ;
      }
    }
    .nav_input_search{
      width:  100%;
      padding:7px ;
      border: none ;
      outline: none ;
      font-size:.8rem ;
      font-weight:500 ;
      font-family: var(--font-family);
      letter-spacing:.7px ;
    }
   }

  .navbar_items{
      display: flex;
      justify-content: center ;
      align-items: center ; 
    .nav_item{
      width:33px ;
      margin-left: 15px ;
    }
  }

`;