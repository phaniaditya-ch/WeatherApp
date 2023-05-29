import React from 'react'
import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img className='logo' alt='weatherapp logo' src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png' />
      </div>
      <div className='navbar-links'>
        <div>
          <Link to='/' className='navbar-link'>
            Home
          </Link>
        </div>
        <div>
          <Link to='/about' className='navbar-link'>
            About
          </Link>
        </div>
        <div>
          <Link to='/search' className='navbar-link'>
            Search
          </Link>
        </div><div>
          <Link to='/login' className='navbar-link'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar