import React from 'react'
import styled from 'styled-components'

export default function Input({type, name, value, label, handelChange, children}) {
  return (
  <Wrapper>
    <label for="password">{label}</label>
    <input type={type}  value={value} name={name}  onChange={handelChange}/>
    {
      children && <div className="forgot">
      <a rel="noopener noreferrer" href="/fogetPassword">Forgot Password ?</a>
    </div>
    }
  </Wrapper>
  )
}



const Wrapper = styled.div`

  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;


 label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

 input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

 input:focus {
  border-color: rgba(167, 139, 250);
}

/* .forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
} */


`