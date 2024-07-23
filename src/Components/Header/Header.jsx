import React from 'react'
import logo from "./logo.png"
import "./Header.css"
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({headingText, closeRoute}) => {
  return (
    <>
    <h1>{headingText}</h1>
    <div className="right-aligned-element">
      <Link to="/">
      <IconButton>
          <CloseIcon
          sx={{
              color: '#FFFFFF',
          }}
          />
          </IconButton>
      </Link>
    </div>
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