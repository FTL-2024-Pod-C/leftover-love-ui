import React from 'react'
import Header from '../Components/Header/Header';
import TextField from '@mui/material/TextField';
import './AddListingPage.css'
// import AWS from 'aws-sdk';
import {useNavigate, useLocation} from "react-router-dom"
import {useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

//const  AddListingPage = ({restaurant}) => {
const  AddListingPage = () => {

    // get the state that was passed through
    let { state } = useLocation();

    // all AWS s3 bucket stuff
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const uploadFile = async () => {
    const S3_BUCKET = "leftoverlove";
    const REGION = "us-east-2";

    AWS.config.update({
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_ID,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const data = await s3.upload(params).promise();
      setImageUrl(data.Location); // stores the uploaded image URL
      alert("File uploaded successfully.");

      // send imageurl to the backend
      await addListing(data.Location);

    } catch (error) {
      alert("Failed to upload file.");
    }
  };
  // end aws


    // set the restaurant user in order to not lose it as the user creates a listing
    const [restaurant, setRestaurant] = useState(state.restaurant);
    const navigate = useNavigate();

    const addNewListing = async (newListing) => {
        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/restaurants/${restaurant.id}/listings`;
          const response = await axios.post(url, newListing);
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
    // const [photoURL, setPhotoURL] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const addListing = () => {
        if (name && quantity && unit && description && expirationDate && category && imageUrl) {
            addNewListing({name, quantity: parseInt(quantity), unit, description, expirationDate, category, photoURL: imageUrl});
            setName('');
            setQuantity('');
            setUnit('')
            setDescription('');
            setExpirationDate('');
            setCategory('');
            setImageUrl('');
        } 
        else {
            alert("Please fill out all fields");
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

const handleClose = () => {
  // Implement your navigation or other logic here
  navigate(`/restaurant-dashboard/${restaurant.username}`);
};

    return (
    <>
    <Header 
        headingText="Add Listings" 
        closeButton={
          <button onClick={handleClose} className="logout-btn">
            Back to Dashboard
          </button>
        }
      />

    <div className='update-listings-page'>
    <div className='updatelistings'>

    {/* <img className='listing-img'
      src="https://via.placeholder.com/150"
      alt="Placeholder"
      style={{ width: '500px', height: 'auto' }}
    /> */}
    <div className="listing-img">
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={uploadFile}>Upload</button>
        </div>
        {imageUrl && (
          <div style={{ 
          width: '300px', 
          height: '300px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
          overflow: 'hidden', 
        //   borderRadius: '50%', 
          border: '1px solid #ccc' }}>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        )}
        </div>

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