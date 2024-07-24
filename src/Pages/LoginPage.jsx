import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react";

const DEV_BASE_URL = "http://localhost:3000"

const LoginPage = () => {
    const navigate = useNavigate();
    const users = [
    {
        label: 'Restaurant',
        value: 'restaurant',
    },
    {
        label: 'Food Pantry',
        value: 'food',
    },
    ];

    const [userType, setUserType] = useState('restaurant');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            if (userType === "restaurant") {
                const response = await axios.post(`${DEV_BASE_URL}/restaurants/restaurantlogin`, {username, password});
                localStorage.setItem("token", response.data.token);
                navigate(`/${userType}-dashboard/${username}`);
            }
            if (userType === "food") {
                const response = await axios.post(`${DEV_BASE_URL}/foodpantries/foodpantrylogin`, {username, password});
                localStorage.setItem("token", response.data.token);
                navigate(`/${userType}-dashboard/${username}`);
            }
            
        }
        catch (error) {
            alert("Login failed! Check credentials");
        }
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    }

  return (
   <>
   <div className='login'>
    <div className='login-header'>
    {/* "x" Button */}
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
          value={userType}
          variant="filled"
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange={handleUserTypeChange}
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
            onChange = {(e) => setUsername(e.target.value)}
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
            onChange = {(e) => setPassword(e.target.value)}
        />
        <div className='sign-up'>
            <h3 className="memberQuestion">Not a member?</h3>
            <Link to="/sign-up">
                <button className='button'>Sign Up!</button>
            </Link>
        </div>
        <button className='button' onClick = {handleLogIn}>Log In</button>
    </form>
   </div>
   </>
  )
}

export default LoginPage