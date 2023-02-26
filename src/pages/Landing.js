import React from 'react'
import styled from 'styled-components'
import {landingPageBg} from '../assets/images/index'
import { LogoCompo, ButtonCompo } from '../components/index'
export default function Landing() {
  return (
    <LandingWrapper imgUrl={landingPageBg} >
      <div className="landing_nav">
          <LogoCompo />
          <ButtonCompo type='Click' text='Register'/>
      </div>
    </LandingWrapper>
  )
}


const LandingWrapper = styled.div`
     height: 100vh ;
     width: 100vw ;
     background-size: cover;
     background-repeat:no-repeat ;
     background-position:center ;
     background-image: url(${landingPageBg}) ;

     .landing_nav{
      display:flex ;
      align-items:center ;
      justify-content:space-between ;
      padding:10px 15px ;

     }
`;