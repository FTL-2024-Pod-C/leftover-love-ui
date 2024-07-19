import React from 'react'
import { Link } from 'react-router-dom';
import './SignUpPage.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';

const SignUpPage = () => {
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
                <h1>Sign Up!</h1>
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
            label="Name" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <TextField
            required
            id="outlined-basic-password" 
            margin="normal"
            type="text"
            label="Email" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />

        <TextField
        required
            id="outlined-basic-username" 
            margin="normal"
            type="text" 
            label="Create Username" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <TextField
        required
            id="outlined-basic-password" 
            margin="normal"
            type="text"
            label="Create Password" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        /> 
         <div className='sign-in'>
            <h3>Already have an account?</h3>
            <Link to="/login">
                <button className='button'>Login</button>
            </Link>
        </div>
        <button className='button'>Create</button>
    </form>
        
    </div>
    </>
  )
}

export default SignUpPage