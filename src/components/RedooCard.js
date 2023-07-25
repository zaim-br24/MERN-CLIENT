import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShare} from '@fortawesome/free-solid-svg-icons';
import {bookmarkLight} from '../assets/icons/index'
import { Link } from 'react-router-dom';

export default function RedooCard({id}) {
  return (
     <Wrapper className="post-card">
       <div className='publisher'>
       <div className='publisher-details'>
            <div className="avatar"></div>
            <a className="publisher-name"> Zaim br -<span className='published-date'> 4 min ago</span></a>
      </div>
      <button className='follow-btn'>follow</button>
      </div>
        <Link className="post-title" to={`/redoo/${id}`}>7 Tools for Faster Development in React</Link>
        <div className="comment-like">
            <span><FontAwesomeIcon icon={faHeart} />12</span>
            <span><FontAwesomeIcon icon={faComment} />8</span>
            <span  ><Link to="/"><img className='icon' src={bookmarkLight}></img> </Link></span>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  min-width: 350px;
  /* background: #F2F3F4; */
  background-color: rgba(255, 255, 255, 1); 
  /* backdrop-filter: blur(10px);    */
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