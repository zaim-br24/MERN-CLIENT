import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function NavItemCompo({icon, link, altText, title}) {
  return (
    <Item className="nav_item element" title={title} >
      <Link to={link} >
        <img src={icon}  alt={altText} />
      </Link>
    </Item>
  )
}


const Item = styled.div`
    width:33px ;
    margin-left: 15px ;
    position: relative;


`;