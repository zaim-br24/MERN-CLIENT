import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <Wrapper>
      <div className='glass-background box profile'>

      <div className='user-profile'>

        <div className='user-profile-container'>

          <div className='user-image'></div>

          <div className='user-info'>
            <p className='user-name'>Zaim br</p>
            <p className='personal-account'>(Your personal account)</p>
          </div>
        </div>
        <button type='click' className='profile-btns edit-btn'>Edit Profile</button>
      </div>

      <div className='user-friends'>
            <p className='user-profile-title'>My Friends</p>
            <Link><span>Followers </span> <span>2,512</span></Link>
            <Link><span>Following</span> <span>512</span></Link>
       </div>

       <div className='user-skills'>
            <p className='user-profile-title'>My Skills</p>
            <div className='skills'>
              <div><span></span> compute science</div>
              <div><span></span> frontend</div>
              <div><span></span> football</div>
              <div><span></span> game dev</div>
            </div>
          

       </div>

      </div>



       <div className='glass-background box activities'>
           activities
        </div>

        <div className='glass-background box budget'>
           budget
        </div>

        <div className='glass-background box statistics'>
          statistics
        </div>
        <div className='glass-background box posts'>
          posts
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
      display: grid; 
      grid-template-columns: 1fr 1fr 1fr; 
      /* grid-template-rows: 1fr 1fr 1fr;  */
      grid-gap: 10px; 
      grid-template-areas: 
      "profile budget activities"
      "profile statistics statistics"
      "profile posts posts"; 
      padding: 10px;
       margin: 20px auto;
      margin-top: 70px;
      margin-left:85px;
      /* margin: 71px 20px 20px 245px; */

      @media screen and (max-width : 900px){
        margin: 71px 20px 20px 20px;
      }
      /* width: 70%; */
      max-width: 70%;


      @media screen and (max-width : 1424px) {
      max-width: 95%;
      grid-template-areas: 
      "profile budget activities"
      "profile statistics statistics"
      "profile posts posts"; 
     }
     @media screen and (max-width : 950px){
      max-width: 100%;
      grid-template-areas: 
      "profile profile profile"
      "budget budget budget"
      "activities activities activities"
      "statistics statistics statistics"
      "posts posts posts"; 
     }
  }


.profile { 
  grid-area: profile;
}
.activities { grid-area: activities; }
.budget { grid-area: budget; }
.statistics { grid-area: statistics; }
.posts { grid-area: posts; }

.user-profile-title{
      margin: 5px 0;
      font-size: 1.1rem;
      font-weight: 600;
}

.user-friends, .user-skills{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.user-skills{
  .skills{
    div{
    background-color: rgba(35, 165, 213, 0.7);
    border-radius: 20px;
    padding: 6px;
    font-size: .8rem;
    font-weight: 600;
    margin: 2px;
    color: #fff;
    display: inline-block;
  }
  }

}
.user-friends{
    a{
        color: rgba(0, 0, 0, 0.5);
        
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .5rem 0;
        :hover{
          color: rgba(0, 0, 0, 0.8);

        }
        span{
          font-size: .9rem;
        }
      }
    }

.user-profile{
  padding: .5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
.user-profile-container{
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  .user-image{
    height: 5rem;
    width:5rem;
    background-color: gray;
    border-radius: .5rem;
    margin-right: 1rem;
  }
  .user-info{
    width: 70%;
    .personal-account{
      font-size: .8rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 5px;
    }
    p{
      font-size: 1.3rem;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
.edit-btn{
  margin: 1rem auto;
  opacity: 1;
  background-color:  #23a6d5;
  color: #fff;
}
`