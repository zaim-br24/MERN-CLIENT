import React, {useState} from 'react'
import styled from 'styled-components'
import { Input, Alert } from '../components'
import { useAppContext } from '../context/appContext'
export default function Register() {

  const intitalState = {
    name:"",
    value:"",
    password:'',
    email:'',
    isMember: false,
  }

const [values, setValues] = useState(intitalState)
const {showAlert,displayAlert } = useAppContext()

const toggleMember = ()=>{
   setValues({...values, isMember : !values.isMember})
}


const handelChange = (e) =>{
  setValues({...values, [e.target.name]: e.target.value})
}
    
const handelSubmit = (e)=> {
  e.preventDefault()
  const {password, email, name, isMember }= values
  if(!password || !email || (!isMember && !name)){
    displayAlert()
    return
  }
  console.log(values)
}

  return (
    <Wrapper>
      <div className='form-container'>
        <h1>{values.isMember ? 'Register' : 'Login'} </h1>   
         {showAlert && <Alert/>}
       <form className='register-form' onSubmit={handelSubmit}>
          {
            values.isMember && 
            <Input 
              type="text" 
              name='name'
              handelChange={handelChange}
              value={values.name}
            />
          }
          <Input 
              type="text" 
              name='email'
              handelChange={handelChange}
              value={values.email}
          />
            <Input 
              type="password" 
              name='password'
              handelChange={handelChange}
              value={values.password}
          />
  
          <button className='btn-style' type='submit'>submit</button>
          <p>
            {!values.isMember ? 'Not a member yet?' : 'Already a member?'}

            <button type='button' onClick={toggleMember} className='member-btn'>
              {!values.isMember ? 'Register' : 'Login'}
            </button>
           </p>
        
        </form>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-container{
    background-color: whitesmoke;
    padding: 40px 15px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    width: 350px;
    h1{
      text-align: center;
      margin: 20px auto;
      color: var(--font-color);

    }

    .register-form{
      display: flex;
      flex-direction: column;

      input{
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        margin: 7px 0;
      }
      .btn-style{
        margin-top: 10px;
            :focus,
            :hover {
            background-color: var(--btn-bg-color);
            }
        }
        p{
          text-align: center;
          margin-top: 10px;
        }
      }
    }


`