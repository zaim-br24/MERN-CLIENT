import React from 'react'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

export default function NavLinks({toggleOverly, insertText}) {
  return (
    <div className='nav-links'>
    {links.map((link) => {
      const { text, path, id, icon, overly } = link

      return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          key={id}
         onClick={overly && toggleOverly}
          
        >
          <span className='icon'>{icon}</span>
          {insertText && text}
        </NavLink>
      )
    })}     
</div>
  )
}
