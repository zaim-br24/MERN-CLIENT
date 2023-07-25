import React from 'react'
import WatchCard from './WatchCard'
import styled from 'styled-components'

export default function WatchCards() {
  return (
    <Wrapper>
    <WatchCard id="1"/>
    <WatchCard id="2"/>
    <WatchCard id="3"/>
    <WatchCard id="4"/>
    <WatchCard id="5"/>
    <WatchCard id="6"/>
    <WatchCard id="7"/>
    <WatchCard id="8"/>
    <WatchCard id="9"/>
    <WatchCard id="10"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 260px, 1fr));
    grid-gap: 10px;
`