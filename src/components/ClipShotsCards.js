import React from 'react'
import ClipShotCard from './ClipShotCard'
import styled from 'styled-components'

export default function ClipShotsCards() {
  return (
    <Wrapper>
        <ClipShotCard id="1"/>
        <ClipShotCard id="2"/>
        <ClipShotCard id="3"/>
        <ClipShotCard id="4"/>
        <ClipShotCard id="5"/>
        <ClipShotCard id="6"/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    /* height: 350px; */
    padding: 10px;
    border-radius: 10px;
    background-color:white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    grid-gap: 10px;
    /* margin: 25px auto 50px auto; */
    /* margin-bottom: 50px; */
    `;
    