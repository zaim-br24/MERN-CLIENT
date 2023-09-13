import React from 'react'
import {BsUpload} from 'react-icons/bs'
import Wrapper from '../assets/Styles/UploadFileWrapper'
// import FormRowFile from './FormRowFile'
import sizeFormater from '../utils/sizeFomater'

export default function UploadFile({handleVideoChange,handleDescription, videoFileName, videoFileSize, wordsCounter}) { 

  // const sizeFormater = (sizeKB)=>{
  //   let _MB;
  //   let _KB;

  //   if(!sizeKB) return null

  //   let fileSizeInMb = Math.round((sizeKB / (1024)))
  //   console.log(fileSizeInMb)
  //   fileSizeInMb =  `${parseInt(fileSizeInMb)}`
  //   if(fileSizeInMb < 10000){
  //    _MB =  fileSizeInMb.slice(0, 1)

  //   }else if(fileSizeInMb >= 10000){
  //     _MB =  fileSizeInMb.slice(0, 2)
  //   }else if(fileSizeInMb >= 100000){
  //     _MB =  fileSizeInMb.slice(0, 2)
  //   }
  //   _KB =  fileSizeInMb.slice(1, 3)
  //   return `${_MB},${_KB}`

  // } 
  const uploadedVideoSize = sizeFormater(videoFileSize)

  const videoTextSize =( !videoFileName || !videoFileSize) ? null : `${videoFileName} (${uploadedVideoSize}MB)`

  return (
    <Wrapper >
         
              {/* <FormRowFile text="Click to upload video (max 40MB)" fileDesc={videoTextSize}  handleChange={handleVideoChange}/>
              <FormRowFile text="Add a thumbnail (max 1MB)" fileDesc={thumbnailTextSize}  handleChange={handleThumbnailChange}/> */}
{/* 
      <div className="custum-file-upload">
        <label htmlFor='file'>
          <BsUpload className="icon"/>
          <div className="text">
            <span>{ videoTextSize || "Click to upload video (max 40MB)"}</span>
          </div>
        </label>
        <input type="file"  id="file" onChange={(e)=>{handleVideoChange(e)}}></input>
      </div> */}
      <label htmlFor="file" class="custum-file-upload">
          <div className="icon">
              <BsUpload className="icon" />
          </div>
          <div className="text">
              <span>{ videoTextSize || "Click to upload video (max 40MB)"}</span>
          </div>
            <input type="file" id="file" onChange={(e)=>{handleVideoChange(e)}}></input>
        </label>

      <div className='video-description'>
          <textarea  rows="4" cols="50" placeholder='Description' onChange={(e)=> handleDescription(e)}/>
          <p className='words-counter'><span>{wordsCounter < 300 ? wordsCounter : "300"}</span>/300</p>
      </div>
   </Wrapper>

  )
}


