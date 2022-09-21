import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function NavItemCompo({icon, link}) {
  return (
    <Item className="nav_item">
      <Link to={link}>
        <img src={icon} alt="Home" />
      </Link>
    </Item>
  )
}


const Item = styled.div`
      width:33px ;
      margin-left: 15px ;
`;