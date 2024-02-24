import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className='bg-black flex justify-between h-16 px-12'>
      <div>
        <img src="https://www.universalpictures.com/assets/img/universalglobe.png" className='h-20' alt="" />
      </div>
<NavBar/>
    </header>
  )
}
