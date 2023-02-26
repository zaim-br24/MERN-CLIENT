import React from 'react'

export default function Input({type, name, value, handelChange}) {
  return (
    <input type={type} placeholder={`Enter ${name}`} value={value} name={name}  onChange={handelChange}/>
  )
}
