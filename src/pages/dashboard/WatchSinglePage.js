import React from 'react'
import Wrapper from '../../assets/Styles/WatchSinglePageWrapper'
import {CommentsBox, VideoPlayer} from '../../components'
// import videoS from '../../assets/videos/truck.mp4'
import videoS from '../../assets/videos/harry.mp4'


export default function WatchSinglePage() {
  return (
    <Wrapper className='nasted-box'>
          <VideoPlayer
            videoSrc={videoS} // Replace with your video URL
          />
        <CommentsBox/>
        
    </Wrapper>
  )
}

