import React from 'react'
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './SignUpPage.css'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const DEV_BASE_URL = "http://localhost:3000"

const SignUpPage = () => {

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            // if restaurant, post should go to restaurant endpoint
            // else food pantry
            if (userType === "restaurant") {
                // console.log(name);
                // console.log(email);
                // console.log(username);
                // console.log(password);
                // console.log(userType);
                // register the user
                const response = await axios.post(`${DEV_BASE_URL}/restaurants`, {name, email, username, password});
                console.log(response);
                // login in the user
                const loginResponse = await axios.post(`${DEV_BASE_URL}/restaurants/restaurantlogin`, {name, email, username, password});
                console.log(loginResponse);
                
                // store token in local storage as token
                localStorage.setItem("token", loginResponse.data.token);
                navigate(`/${userType}-dashboard/${username}`);
            }
            else if (userType === "food") {
                const response = await axios.post(`${DEV_BASE_URL}/foodpantries`, {name, email, username, password});
                console.log(response);
                // login in the user
                const loginResponse = await axios.post(`${DEV_BASE_URL}/foodpantries/foodpantrylogin`, {name, email, username, password});
                console.log(loginResponse);
                
                // store token in local storage as token
                localStorage.setItem("token", loginResponse.data.token);
                navigate(`/${userType}-dashboard/${username}`);
            }
        }
        catch (error) {
            console.log(error);
            alert("Registration failed. Try again!");
        }
    }

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    }
    
    return (
    <>

    <div className='signup'>
        <div className='signup-header'>

        <div className="right-align-element">
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

            <div className="center-element">
                <h1>Sign Up!</h1>
            </div>
        </div>

        <form className='signup-form'>
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
            id="outlined-basic-name" 
            margin="normal"
            type="text" 
            label="Name" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setName(e.target.value)}
        />
        <TextField
            required
            id="outlined-basic-email" 
            margin="normal"
            type="text"
            label="Email" 
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setEmail(e.target.value)}
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
            onChange={(e)=> setUsername(e.target.value)}
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
            onChange={(e)=> setPassword(e.target.value)}
        /> 
         {/* <div className='sign-in'>
            <h3 className="accountQuestion">Already have an account?</h3>
            <Link to="/login">
                <button className='button'>Login</button>
            </Link>
        </div>
        <button className='button' onClick = {handleSignUp}>Create</button> */}
    </form>
    {/* <div className='sign-in'>
            <h3 className="accountQuestion">Already have an account?</h3>
            <Link to="/login">
                <button className='button'>Login</button>
            </Link>
        </div> */}
        <button className='signup-button' onClick = {handleSignUp}>Create</button> 
        <div className='sign-in'>
            <h3 className="accountQuestion">Already have an account?</h3>
            <Link to="/login">
                <button className='button'>Login</button>
            </Link>
        </div> 
    </div>
    </>
  )
}

export default SignUpPage