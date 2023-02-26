import React from 'react';
import styled from 'styled-components';
import { NavItemsCompo , LogoCompo, ButtonCompo } from './index';
import {searchIcon} from "../assets/icons/index"

export default function NavbarCompo() {
  return (
    <Nav>
      <LogoCompo />
      
       <div className="nav_search_box">
        <div className="search_icon">
          <img src={searchIcon} alt="" />
        </div>
           <input type="text" className="nav_input_search" placeholder='search' />
       </div>
      <NavItemsCompo />
      <ButtonCompo type="click" text='register' link='/register'/>


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