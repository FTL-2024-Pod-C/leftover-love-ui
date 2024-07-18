import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';

const SignUpPage = () => {
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
                <h1>Sign Up!</h1>
            </div>
        </div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Link to="/food-dashboard">
                <button className="dashboardButton">Food Pantry</button>
            </Link>
            <Link to="/restaurant-dashboard">
                <button className="dashboardButton">Restaurant</button>
            </Link>
        </ButtonGroup>
        <form className='form'>
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Name" 
                variant="outlined"
            />
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Email" 
                variant="outlined"
            />
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
        </form>
        {/* Placeholder Button */}
        {/* <button className='button'>Create</button> */}
        <Link to="/food-dashboard">Create</Link>
    </div>
    </>
  )
}

export default SignUpPage