import React from 'react'
import Header from '../Components/Header/Header';
import TextField from '@mui/material/TextField';
import './AddListingPage.css'
import {useNavigate, useLocation} from "react-router-dom"
import {useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

const DEV_BASE_URL = "http://localhost:3000"
//const  AddListingPage = ({restaurant}) => {
const  AddListingPage = () => {

    // get the state that was passed through
    let { state } = useLocation();
    console.log(state);

    // set the restauran user in order to not lose it as the user creates a listing
    const [restaurant, setRestaurant] = useState(state.restaurant);
    const navigate = useNavigate();

    const addNewListing = async (newListing) => {
        try {
          console.log("in addNewListing")
          const url = `${DEV_BASE_URL}/restaurants/${restaurant.id}/listings`;
          const response = await axios.post(url, newListing);
          console.log(response.data);
        }
        catch (error) {
          console.error("Error creating a new listing", error);
        }
    }
    
    const categories = [
        {
            label: 'Dairy',
            value: 'dairy',
        },
        {
            label: 'Vegetable',
            value: 'vegetable',
        },
        {
            label: 'Fruit',
            value: 'fruit',
        },
        {
            label: 'Grain',
            value: 'grain',
        },
        {
            label: 'Protein',
            value: 'protein',
        },
        {
            label: 'Meal',
            value: 'meal',
        }
        ];

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [description, setDescription] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [category, setCategory] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const addListing = () => {
        //maybe you cab debug if this addListing function is being called bc it doesnt seem like its make a call to your backend rn
        console.log("in addListing()");
        if (name && quantity && unit && description && expirationDate && category) {
            addNewListing({name, quantity: parseInt(quantity), unit, description, expirationDate, category, photoURL});
            setName('');
            setQuantity('');
            setUnit('')
            setDescription('');
            setExpirationDate('');
            setCategory('');
            setPhotoURL('temp.url');
        } 
        else {
            alert("Please fill out all fields");
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

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

    <div className='listing-form'>
        <TextField
            id="outlined-name" 
            type="text" 
            label="Name of Item" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setName(e.target.value)}
        />
        <TextField
            id="outlined-description" 
            type="text" 
            label="Description" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setDescription(e.target.value)}
        />
         <TextField
            id="outlined-quantity" 
            type="text" 
            label="Quantity" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setQuantity(e.target.value)}
        />
        <TextField
            id="outlined-unit" 
            type="text" 
            label="Unit" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setUnit(e.target.value)}
        />
        <TextField
            required
            id="outlined-select-category"
            select
            label="Choose Category"
            value={category}
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={handleCategoryChange}
            >
            {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
        </TextField>
         <TextField
            id="outlined-best-by" 
            type="text" 
            label="Best By" 
            margin="normal"
            variant="filled"
            sx={{
                backgroundColor: '#ffffff',
            }}
            onChange={(e)=> setExpirationDate(e.target.value)}
        />
        {/* <Link to="/restaurant-dashboard/:username"> */}
        <button className='dashboardButton' 
        onClick={()=> {
            console.log(restaurant.username);
            addListing();
            navigate(`/restaurant-dashboard/${restaurant.username}`); 
            // addListing();
            }}>Add Listing</button>
        {/* </Link> */}
    </div>
</div>
</div>
    </>
  )
}

export default AddListingPage