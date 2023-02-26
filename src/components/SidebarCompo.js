import React from 'react'
import styled from 'styled-components'

export default function SidebarCompo() {
  return (
    <Wrapper>
      sidebar
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 30% ;
    border: 1px solid var(--border-color) ;
    padding: 5px ;
    border-radius:10px ;
`;