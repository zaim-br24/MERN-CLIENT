import React from 'react'
import styled from 'styled-components'
import { Card} from './index'

export default function Cards() {
  return (
    <Wrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    margin: 50px auto;
`