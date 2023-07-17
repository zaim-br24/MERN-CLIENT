import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function WatchCard({id}) {
  return (
    <Wrapper class="card">
      <Link to={`/watch/${id}`}>
        <div class="image"></div>
        <div class="content">
            <a href="#">
            <span class="title">
            [BIG ANNOUNCEMENT] My Biggest Week On BACKDOOR!! Here's Why...
            </span>
            </a>
        <div className='publisher'>
            <div class="avatar"></div>
            <a class="publisher-name">Zaim br -<span className='published-date'> 4 min ago</span> - 23k views</a>
        </div>
        </div>
    </Link>

        </Wrapper>

    )
}

const Wrapper = styled.div`
  min-width: 250px;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;

.image {
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
}
.content {
  padding: 5px;
  
.title {
  color: #000;
  font-size: .8rem;
  line-height: 1rem;
  font-weight: 500;
}

.publisher{
    display: flex;
    align-items: center;
    position: relative;

    .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: blueviolet;
    background-image: linear-gradient(to top left, blueviolet, #23a6d5);
    }
    .publisher-name{
        font-size: .7rem;
        font-weight: 600;
        margin-left: 10px;
        color: rgb(88, 87, 87);
    }
    .published-date{
        font-size:.7rem;
        color: rgb(88, 87, 87);
    }
}

}

`;