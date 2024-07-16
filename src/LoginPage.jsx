import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const LoginPage = () => {
  return (
   <>
   <div className='login'>
    <div className='login-header'>
        <div className="right-aligned-element">
            <IconButton>
            <CloseIcon />
            </IconButton>
        </div>
        <div className="centered-element">
            <h1>Welcome!</h1>
        </div>
    </div>
    <form className='form'>
        <TextField
            id="outlined-basic" 
            type="text" 
            label="Username" 
            variant="outlined"
        />
        <TextField
            id="outlined-basic" 
            type="text" 
            label="Password" 
            variant="outlined"
        />
        <div className='sign-up'>
            <h3>Not a member?</h3>
            <Link to="/sign-up" className='sign-up-btn'>Sign Up!</Link>
        </div>
        {/* Placeholder Button */}
        <button className='button'>Log In</button>
    </form>
   </div>
   </>
  )
}

export default LoginPage