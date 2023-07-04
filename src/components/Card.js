import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShare} from '@fortawesome/free-solid-svg-icons';
import {bookmarkLight} from '../assets/icons/index'
import { Link } from 'react-router-dom';

export default function Card() {
  return (
     <Wrapper className="post-card">
        <div className='publisher'>
            <div class="avatar"></div>
            <a class="publisher-name">Zaim br -<span className='published-date'> 4 min ago</span> <button className='follow-btn'>follow</button></a>

        </div>
        <a class="title" href="#">7 Tools for Faster Development in React</a>
        {/* <span class="datetime">3 min to read</span> */}
        {/* <div class="image-preview"></div> */}
        <div class="comment-like">
            <span><FontAwesomeIcon icon={faHeart} />12</span>
            <span><FontAwesomeIcon icon={faComment} />8</span>
            <span  ><Link to="/"><img className='icon' src={bookmarkLight}></img> </Link></span>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  min-width: 250px;
  /* background: #F2F3F4; */
  background-color: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10px);   
  /* border: 1px solid rgb(84 90 106); */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;


  a{
    font-weight: 600;
    width: 70%;
  }
  .icon{
    width: 30px;
    color: black;
  }

.publisher{
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    position: relative;
    .avatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: blueviolet;
    background-image: linear-gradient(to top left, blueviolet, #23a6d5);
    }
    .publisher-name{
        font-size: 1rem;
        font-weight: 600;
        margin-left: 10px;
    }
    .published-date{
        font-size:.7rem;
    }
    .follow-btn{
        border: none;
        background-color: #23a6d5;
        padding: 5px;
        border-radius: 10px;
        color: #FFFF;
        font-weight: 600;
        position: absolute;
        right: 0;
        cursor: pointer;

        :hover{
            opacity: .7;
        }
    }
}
.title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  margin: 10px 0;
  color: #000;
  text-decoration: none;
  transition: all .30s ease-in;
}

.title:hover {
  text-decoration: underline blueviolet;
  background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
     background-clip: text;
    -webkit-background-clip: text;
     color: transparent;
}

.datetime {
  font-size: 12px;
  color: rgb(168 179 207);
  margin: 3px 0;
}

.image-preview {
  flex: 1;
  min-height: 150px;
  width: 100%;
  border-radius: 10px;
  background-color: blueviolet;
  background-image: linear-gradient(to top left, blueviolet, #23a6d5);
  margin-bottom: 4px;
}

.comment-like {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 0;
}

.comment-like span {
  cursor: pointer;
  height: 40px;
  width: 50px;
  /* padding: 0 3px; */
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  font-weight: 900;
  border-radius: 10px;
  background-color: transparent;
  transition: all .15s ease;
}

.comment-like span:hover {
  background-color:#23a6d5;
  color: #FFFF;
}

.comment-like span svg {
  fill: rgb(255, 255, 255);
  margin-right: 2px;
}
`