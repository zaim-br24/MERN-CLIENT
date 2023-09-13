import React from 'react'
import Wrapper from '../../assets/Styles/WatchSinglePageWrapper'
import {CommentsBox, VideoPlayer} from '../../components'
// import videoS from '../../assets/videos/truck.mp4'
const videoS  =  'https://backdoorvideos.s3.us-east-1.amazonaws.com/aac419e1792eeece729d004c1eb21b9a37f49018941d44cf6a29657b29d81a9c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAW3BXZ4N7P5IEVIXY%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230905T104622Z&X-Amz-Expires=3600&X-Amz-Signature=d6b8fe60a48c9cb0037c642f2a4c514fb82dc5eaf6d62650ad716aaace08a2a8&X-Amz-SignedHeaders=host&x-id=GetObject'


export default function WatchSinglePage() {
  return (
    <Wrapper className='nasted-box'>
      <div className='item1'>
        <VideoPlayer
            videoSrc={videoS} // Replace with your video URL
          />
      </div>
      <div className='item2'>
         <CommentsBox/>
      </div>
      
      <div className='item3'>

      </div>

        
    </Wrapper>
  )
}

