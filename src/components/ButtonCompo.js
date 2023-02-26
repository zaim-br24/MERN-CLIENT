import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function ButtonCompo({type ,text, link}) {
  return (
    <Button>
        <Link to={link}>
          <button className='btn-style' type={type}>{text}</button>
        </Link>
    </Button>
  )
}


const Button = styled.div`
    border-radius: 10px;

    button{
        :focus,
        :hover {
        background-color: var(--btn-bg-color);
        transform: scale(1.09);
        }
    }
`;