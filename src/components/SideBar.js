import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);


export default function SideBar() {
  return (
    <Wrapper>
      <div><FontAwesomeIcon className='icon' icon={faHouse} /> <Link to="/">Home</Link></div>
      <div><FontAwesomeIcon className='icon' icon={faSearch}  /> <Link to="/">Search</Link></div>
      {/* <div class="group">
        <svg class="svgIcon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search" type="search" class="input"></input>
      </div> */}
      <div><FontAwesomeIcon className='icon' icon={faPlus} /> <Link to="/create-post">Add post</Link></div>
      <div><FontAwesomeIcon className='icon' icon={['far', 'bookmark']} /><Link to="/bookmarked">Bookmark</Link></div>
      
    </Wrapper>
  )

}


const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top:54px;
    bottom: 0;
    width: 220px;
    background-color:white ;
    border-right: 1px soild var(--border-color);
    display: flex;
    flex-direction: column;
    padding: 15px 10px;

    .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 100%;
    }

    .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    /* background-color: #f3f3f4; */
    color: #0d0c22;
    transition: .3s ease;
    }

    .input::placeholder {
    color: #9e9ea7;
    }

    .input:focus, input:hover {
    outline: none;
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    }

    .svgIcon {
    position: absolute;
    color: #0d0c22;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
    }
    div{

      
      :first-child{
      background-color: whitesmoke;
      }
      padding: 10px;
      width: 100%;
      margin: 3px 0 ;
      border-radius: 10px;
      transition: all .2s ease-in;
      display: flex;
      align-items: center;
      :hover{
        background-color: whitesmoke;

      }
      a{
        font-weight: 600;
        width: 70%;
      }
      .icon{
        font-size: 22px;
        margin-right: 15px;
        width: 30%;
        color: black;
      }
    }
    @media screen and (max-width : 900px){
      display: none;
     }
`