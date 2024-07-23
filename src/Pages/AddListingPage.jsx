import React from 'react'
import Header from '../Components/Header/Header';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './AddListingPage.css'
import {useNavigate} from "react-router-dom"

const UpdateListingsPage = (props) => {
    const navigate = useNavigate();
  return (
    <>
    <Header headingText="Add Listing" closeRoute="/restaurant-dashboard"/>

    <div className='update-listings-page'>
    <div className='updatelistings'>
    <img className='listing-img'
      src="https://via.placeholder.com/150"
      alt="Placeholder"
      style={{ width: '500px', height: 'auto' }}
    />

    <form className='listing-form'>
        <TextField
            id="outlined-basic" 
            type="text" 
            label="Name of Item" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <TextField
            id="outlined-basic" 
            type="text" 
            label="Description" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Quantity" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Category" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Best By" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        {/* <Link to="/restaurant-dashboard/:username"> */}
        <button className='dashboardButton' onClick={()=> navigate(`/restaurant-dashboard/${props.restaurant.username}`)}>Add Listing</button>
        {/* </Link> */}
    </form>
</div>
</div>
    </>
  )
}

export default UpdateListingsPage