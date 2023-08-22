import React from 'react'
import {BsUpload} from 'react-icons/bs'
import Wrapper from '../assets/Styles/UploadFileWrapper'

export default function UploadFile() {
    const fileType = "Video"
  return (
    <Wrapper >

      <div class="custum-file-upload" for="file">
        <BsUpload class="icon"/>
        <div class="text">
           <span>{`Click to upload ${fileType}`}</span>
        </div>

        <input type="file" id="file"></input>
      </div>
      <div className='video-description'>
        <textarea  rows="4" cols="50" placeholder='Description'/>
        <p className='words-counter'><span>0</span>/300</p>
      </div>
   </Wrapper>

  )
}
