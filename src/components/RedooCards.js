import React from 'react'
import styled from 'styled-components'
import { RedooCard} from './index'

export default function RedooCards() {
  return (
    <Wrapper>
        <RedooCard id="1"/>
        <RedooCard id="2"/>
        <RedooCard id="3"/>
        <RedooCard id="4"/>
        <RedooCard id="5"/>
        <RedooCard id="6"/>
        <RedooCard id="7"/>
        <RedooCard id="8"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 2fr));
    grid-gap: 10px;
    margin: 25px auto;

`