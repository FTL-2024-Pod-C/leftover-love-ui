import React from 'react'
import logo from "./logo.png"
import "./Header.css"
import { Link } from 'react-router-dom';

const LandingPageHeader = ({headingText, closeRoute}) => {
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
        {/* <Link to={closeRoute}> */}
          {/* <IconButton className="xButton">
              <CloseIcon
              sx={{
                  color: '#FFFFFF',
                  fontSize: '40px',
              }}
              />
            </IconButton> */}
        
        {/* </Link> */}
        <Link to="/login" className='button header-item'>Login</Link>
      </div>
    </div>
    </>
  )
}

export default LandingPageHeader;