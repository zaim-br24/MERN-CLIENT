import React, {useEffect} from 'react'
import styled from 'styled-components'
import { RedooCard} from './index'
import { useAppContext } from '../context/appContext'
import Loader from './Loader';
import moment from 'moment/moment';
import { useState } from 'react';
import axios from 'axios';

export default function RedooCards() {
  const { getAllRedoos, redoos, isLoading, user, page, setPage, numOfRedoosPages, totalRedoos} = useAppContext();
  
  useEffect(() => {
      getAllRedoos();

  }, [page]); // Only fetch when the page changes

  const fetchMoreData = () => {
    setPage(page + 1)
  };
    
  const handleScroll = () => {

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollTop + innerHeight + 1 >= scrollHeight  && page < 3) {
      const previousScrollPosition = window.scrollY; 
      fetchMoreData()
      console.log('New fetch: '+ page)
      window.scrollTo(0, previousScrollPosition);

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (

    <Wrapper>

      {/* {isLoading && <Loader />} */}
      {/* <h3>{"pages: " + numOfRdoosPages}</h3> */}
      {redoos.map(redoo => (
        <RedooCard
          key={redoo._id}
          src={redoo.image}
          title={redoo.title}
          content={redoo.content}
          postedBy={user.name}
          date={moment(redoo.createdAt).format('MMM Do YY')}
          likes={redoo.likes}
          comments={redoo.comments}
        />
      ))}
  
      {isLoading && <div>Loading more...</div>}
    </Wrapper>
  );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 10px auto;


`