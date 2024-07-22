import React from 'react'
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './LoginPage.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import axios from "react";

const DEV_BASE_URL = "http://localhost:3000"

const SignUpPage = () => {
    const {userType, setUserType} = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSignUp = async () => {
        try {
            // if restaurant, post should go to restaurant endpoint
            // else food pantry
            if (userType === "restaurant") {
                
                // register the user
                const response = axios.post(`${DEV_BASE_URL}/restaurants`, {name, email, username, password});

                // login in the user
                const loginResponse = axios.post(`${DEV_BASE_URL}/restaurants/restaurantlogin`);
                
                // store token in local storage as token
                localStorage.setItem("token", loginResponse.data.token);
            }

        }
        catch (error) {
            alert("Registration failed. Try again!");
        }
    }
    
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
        <select className="userType">
          <option value="">Select User Type</option>
          <option value="restaurant-user" onClick={() => setUserType("restaurant")}>Restaurant</option>
          <option value="food-pantry-user" onClick={() => setUserType("food")}>Food Pantry</option>
        </select>
        {/* <ButtonGroup variant="contained" aria-label="Basic button group">
            <Link to="/food-dashboard">
                <button className="dashboardButton">Food Pantry</button>
            </Link>
            <Link to="/restaurant-dashboard">
                <button className="dashboardButton">Restaurant</button>
            </Link>
        </ButtonGroup> */}
        <form className='form'>
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Name" 
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Email" 
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Username" 
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                id="outlined-basic" 
                type="text" 
                label="Password" 
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
        </form>
        <Link to="/food-dashboard">
            <button className="createProfile" onClick = {handleSignUp}>Create</button>
        </Link>
    </div>
    </>
  )
}

export default SignUpPage