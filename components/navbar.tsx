import React from 'react'
import NavLink from './navLink'

function Navbar() {
  return (
    <div className='h-[72px] w-full sticky top-0 border-b flex items-center justify-center'>
        <NavLink href='/'>{"Accueil"}</NavLink>
    </div>
  )
}

export default Navbar