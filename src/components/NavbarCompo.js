import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {homeIcon,searchIcon, notificationIcon, addIcon, bookmarkedIcon, settingsIcon} from "../assets/images/icons/index"

export default function NavbarCompo() {
  return (
    <Nav>
       <div className="logo">Backdoor</div>

       <div className="nav_search_box">
        <div className="search_icon">
          <img src={searchIcon} alt="" />
        </div>
           <input type="text" className="nav_input_search" placeholder='search' />
       </div>

       <div className="navbar_items">
            <div className="nav_item">
              <Link to="/">
                <img src={homeIcon} alt="Home" />
              </Link>
            </div>
            <div className="nav_item">
              <Link to="/">
                <img src={notificationIcon} alt="Home" />
              </Link>
            </div>
            <div className="nav_item">
              <Link to="/">
                <img src={addIcon} alt="Home" />
              </Link>
            </div>
            <div className="nav_item">
              <Link to="/">
                <img src={bookmarkedIcon} alt="Home" />
              </Link>
            </div>
            <div className="nav_item">
              <Link to="/">
                <img src={settingsIcon} alt="Home" />
              </Link>
            </div>
       </div>
       
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
  
   .logo{
     color: var(--heading-color) ;
     font-size:2rem ;
     font-weight:800 ;
   }
   .nav_search_box{
    display: flex ;
    align-items: center ;
    width: 270px ;
    border: 1px solid var(--border-color) ;
    padding: 5px;

    .search_icon{
      width: 10% ;
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