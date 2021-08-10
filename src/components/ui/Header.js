import React from 'react'
import logo from '../../img/logo.png'
import  { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='center'>
      <Link to="/">

        <img src={logo} alt='' />

      </Link>
      
    </header>
  )
}

export default Header
