import React from 'react'
import WatchCard from './WatchCard'
import styled from 'styled-components'

export default function WatchCards() {
  return (
    <Wrapper>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    <WatchCard/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 220px, 1fr));
    grid-gap: 10px;
`