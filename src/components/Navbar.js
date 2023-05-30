import React, { useEffect } from 'react'
import {
  Link
} from "react-router-dom";
import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

function Navbar() {
  let [theme, setTheme] = useState("light-theme");

  const handleToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img className='logo' alt='weatherapp logo' src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png' />
        </Link>
      </div>
      <div className='heading'>
        <Link to='/' className='heading-link'>
          <h1>
            WeatherApp
          </h1>
        </Link>
      </div>
      <div className='navbar-links'>
        <div className='toggle-switch' onChange={handleToggle}>
          <ToggleSwitch />
        </div>
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