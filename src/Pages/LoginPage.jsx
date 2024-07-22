import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const LoginPage = () => {
    const users = [
    {
        label: 'Restaurant',
        value: 'R',
    },
    {
        label: 'Food Pantry',
        value: 'FP',
    },
    ];

  return (
   <>
   <div className='login'>
    <div className='login-header'>
    <div className="right-aligned-element">
            <Link to="/">
            <IconButton>
                <CloseIcon 
                sx={{
                    color: '#ffffff',
                }}
                />
                </IconButton>
            </Link>
            </div>
        <div className="centered-element">
            <h1>Welcome!</h1>
        </div>
    </div>
    <form className='form'>
        <TextField
        required
          id="outlined-select-user"
          select
          label="Choose User"
          defaultValue="R"
          variant="filled"
        sx={{
            backgroundColor: '#ffffff',
        }}
        >
        {users.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
        required
            id="outlined-basic-username" 
            margin="normal"
            type="text" 
            label="Username" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <TextField
        required
            id="outlined-basic-password" 
            margin="normal"
            type="password"
            label="Password" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <div className='sign-up'>
            <h3>Not a member?</h3>
            <Link to="/sign-up">
                <button className='button'>Sign Up!</button>
            </Link>
        </div>
        <button className='button'>Log In</button>
    </form>
   </div>
   </>
  )
}

export default LoginPage