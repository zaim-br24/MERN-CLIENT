import React from 'react'
import styled from 'styled-components'

export default function SideBarIcon({icon}) {

  return (
    <Wrapper >
        <img className="icon" src={icon}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
      width: 45px;
      padding: 10px;
      margin: 5px 0 ;
      border-radius: 10px;
      transition: all .2s ease-in;
      display: flex;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color:  rgba(35, 165, 213, 0.5);

      }
      .icon{
        width: 100%;
        color: black;
        margin: 0 auto;
  
    }
      

`