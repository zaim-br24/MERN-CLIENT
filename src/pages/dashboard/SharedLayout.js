import React ,{useEffect} from "react"
import { Outlet } from "react-router-dom"
import { Navbar, SmallSidebar, BigSidebar, Overly, Recommendation} from "../../components/index"
import { Link } from "react-router-dom"
import Wrapper from "../../assets/Styles/SharedLayoutWrapper"
import {
  clipshotLight,
  watchLight,
  redoosLight,
} from "../../assets/icons/index"

import { useAppContext } from "../../context/appContext";

export default function SharedLayout() {

  const {isOverlyOpen, showSidebar,showRecommendations, displayReommendations} = useAppContext()

  return (
    <Wrapper>
      <main className="dashboard">
       <SmallSidebar/>
       {showRecommendations && <Recommendation/>}
       
  
       {
        showSidebar &&   <BigSidebar/> 
       }

       <div>
        
          <Navbar/>
            <div className="dashboard-page">
              <Outlet/>
            </div>
        </div>

       {isOverlyOpen &&  <Overly>
          <Link className='create-post-btn' to="/upload/clipshot"> <p>Create a Clipshot</p> <img className="icon" alt="clipshot" src={clipshotLight}></img></Link>
          <Link className='create-post-btn' to='/upload/video'> <p>Upload a Video</p> <img className="icon" alt="watch" src={watchLight}></img></Link>
          <Link className='create-post-btn' to="/upload/redoo"> <p>Write a Redoo</p> <img className="icon" alt="redoo" src={redoosLight}></img></Link>

        </Overly>}
      </main>
    </Wrapper>
  )
}


