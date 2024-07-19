import React from 'react'
import logo from "./logo.png"
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='header'>
    <Link to="/">
    <img src={logo} alt="Logo" className="logo header-item" />
    </Link>
    <Link to="/login" className='button header-item'>Login</Link>
    </div>
    </>
  )
}

export default Header