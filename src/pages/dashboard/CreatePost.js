import React , {useState} from 'react'
import {TextEditor, UploadFile, TagsInput, CategoriesInput} from '../../components/index'
import {FormRow} from '../../components/index'
import {BsCameraVideo} from 'react-icons/bs'
import {HiScissors} from 'react-icons/hi'
import {MdOutlineArticle} from 'react-icons/md'
import Wrapper from '../../assets/Styles/CreatePostWrapper'

export default function CreatePost() {
  const [activeBtn, setActiveBtn] = useState('redoo')

  const handleClick = (v) =>{
    setActiveBtn(v);
    
  }

  return (
    <Wrapper className='nasted-box'>
      <div  className='container'>
      <h2>Create a new post.</h2>

        <div className='submit-types-container'>
           <button type='click' className='btns-submit' onClick={()=> handleClick("redoo")}> <MdOutlineArticle className='icon'/> Redoo </button>
            <button type='click' className='btns-submit'  onClick={()=> handleClick("video")}> <BsCameraVideo className='icon'/> video </button>
            <button type='click' className='btns-submit'  onClick={()=> handleClick("clipshot")}> <HiScissors className='icon'/> clipshot </button>
          </div>
        <form>
          <FormRow
          type='text'
          name='title'
          //   value={title}
          placeholder='Title'
          handleChange={(e) => console.log(e.target)}
          />
          {activeBtn === "redoo" && <TextEditor/>}
          {/* <TextEditor/> */}
          {activeBtn === "video" && <UploadFile/>}  

          <TagsInput/>
          <CategoriesInput/>

          <button type='submit' className='btns-submit submit-btn'>Submit</button>
        </form>
      </div>
    </Wrapper>
  )
}

