import React from 'react'
import {BsUpload} from 'react-icons/bs'
import Wrapper from '../assets/Styles/UploadFileWrapper'

export default function UploadFile({handleVideoChange, handleDescription, fileName, fileSize, wordsCounter}) { 

  const sizeFormater = (sizeKB)=>{
    let _MB;
    let _KB;

    if(!sizeKB) return null

    let fileSizeInMb = Math.round((sizeKB / (1024)))
    console.log(fileSizeInMb)
    fileSizeInMb =  `${parseInt(fileSizeInMb)}`
    if(fileSizeInMb < 10000){
     _MB =  fileSizeInMb.slice(0, 1)

    }else if(fileSizeInMb >= 10000){
      _MB =  fileSizeInMb.slice(0, 2)
    }else if(fileSizeInMb >= 100000){
      _MB =  fileSizeInMb.slice(0, 2)
    }
    _KB =  fileSizeInMb.slice(1, 3)
    return `${_MB}`

  } 
  
  const uploadedVideoSize = sizeFormater(fileSize)
  const fileDesc =( !fileName || !fileSize) ? null : `${fileName} (${uploadedVideoSize}MB) `

  return (
    <Wrapper >
      
      <div class="custum-file-upload" for="file">
        <BsUpload class="icon"/>
        <div class="text">
           <span>{ fileDesc || "Click to upload video (max 40MB)"}</span>
        </div>

        <input type="file" id="file" onChange={(e)=>{handleVideoChange(e)}}></input>
      </div>
      <div class="custum-file-upload" for="thumbnail">
        <BsUpload class="icon"/>
        <div class="text">
           <span>Thumbnail (max 1MB)</span>
        </div>

        <input type="file" id="thumbnail" accept='.jpeg, .png, .jpg' onChange={(e)=>{handleVideoChange(e)}} ></input>
      </div>
      
      <div className='video-description'>
        <textarea  rows="4" cols="50" placeholder='Description' onChange={(e)=> handleDescription(e)}/>
        <p className='words-counter'><span>{wordsCounter < 300 ? wordsCounter : "300"}</span>/300</p>
      </div>
   </Wrapper>

  )
}
