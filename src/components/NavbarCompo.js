import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser,faSquareUser } from '@fortawesome/free-solid-svg-icons'
import { NavItemsCompo , LogoCompo, ButtonCompo, SideBar } from './index';
// import {Logout} from '../pages/index'
import {searchIcon} from "../assets/icons/index"
import { useAppContext } from '../context/appContext.js'
import { Link } from 'react-router-dom';



export default function NavbarCompo() {
  const {userRegistered} = useAppContext()
  return (
    <Nav>
       {/* <SideBar/> */}
      <LogoCompo />
      
       <div className="nav_search_box">
        <div className="search_icon">
          <img src={searchIcon} alt="" />
        </div>
           <input type="text" className="nav_input_search" placeholder='search' />
       </div> 
       <NavItemsCompo />
      
       {
        !userRegistered ? <ButtonCompo type="click" text='register' link='/register'/> 
        : 
      <div className='profile-container'>
        <Link to="logout">
           <FontAwesomeIcon className='icon' icon={faUser} />
           <p>Profile</p>
        </Link>
       

      </div>

        // <button className='logoutBtn'> 

        // <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket}/> 
        //  <p>Logout</p>  
       //  <FontAwesomeIcon className='icon' icon={faUser} /> 
        //  </button> 
       
       }
    </Nav>
  )
}



const Nav = styled.nav`
   display:flex ;
   justify-content: space-between;
   align-items: center ;
   padding:10px  20px;
   background-color: var( --primary-bg-color) ;
   border-bottom: 1px solid var(--border-color);
   width: 100vw;
   height: 64px;
   top: 0;
   position: fixed;

   .icon{
    font-size:  23px;
    color: var( --font-color);
    cursor: pointer;
   }
   .profile-container a{
    background-color: var(--secondary-bg-color);
    cursor: pointer;
    border-radius: 20px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;

   }
   .logoutBtn{
    padding: 5px 15px;
    background-color: whitesmoke;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    :hover{
      box-shadow: 0px 1px 0px 2px #000000;
    }
    :focus{
      transform: scale(.9)
    }


   }
   p{
      font-size: 16px;
      font-weight: 500;
      margin-left: 5px;
    }
   /* .logo{
     color: var(--heading-color) ;
     font-size:2rem ;
     font-weight:800 ;
   } */
   .nav_search_box{
    display: flex ;
    align-items: center ;
    width:40%  ;
    border: 1px solid var(--border-color) ;
    padding: 6px 10px;
    border-radius:20px ;

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