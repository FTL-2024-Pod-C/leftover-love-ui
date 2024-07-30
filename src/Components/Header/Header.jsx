import React from 'react'
import logo from "./logo.png"
import "./Header.css"
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({headingText, closeButton}) => {
  return (
    <>
    <div className="header">
      <div className="headerLeftSide">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo header-item" />
        </Link>
        <h1 className="headerText">{headingText}</h1>
      </div>
      <div className="headerRightSide">
      {closeButton}
      </div>
    </div>
    </>
  )
}

export default Header