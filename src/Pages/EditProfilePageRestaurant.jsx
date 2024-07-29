import React, { useState } from 'react'
import "./EditProfilePageRestaurant.css"
import Header from '../Components/Header/Header';
import TextField from '@mui/material/TextField';
import {useNavigate, useLocation} from "react-router-dom"
import axios from "axios";
import AWS from 'aws-sdk';

const EditProfilePageRestaurant = () => {
  //use states for profile
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState(null);
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // get the state that was passed through
  let { state } = useLocation();
  console.log(state);
  // set the restaurant user in order to not lose it as the user updates profile
  const [restaurant, setRestaurant] = useState(state.restaurant);
  const navigate = useNavigate();
  //function for updating profile
  const handleEditProfile = async (e) => {
    console.log("Restaurant in the handleEditProfile is", restaurant)

    let updatedFields = {}
    if (name !== null && name !== '') updatedFields.name = name;
    if (location !== null && location !== '') updatedFields.location = location;
    if (description !== null && description !== '') updatedFields.description = description;
    if (email !== null && email !== '') updatedFields.email = email;
    if (phone_number !== null && phone_number !== '') updatedFields.phone_number = phone_number;

    

    try {
      console.log("in handleEditProfile")
      // const restaurantId = 3;
      // e.preventDefault();
      // const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/restaurants/${restaurant.id}`, {name, location, description, email, phone_number});
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/restaurants/${restaurant.id}`, updatedFields);
      console.log(response.data);
    }
    catch (error) {
      console.error("Error updating profile page", error);
    }
  }
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
      console.log("File uploaded successfully:", data.Location);
      setImageUrl(data.Location); // stores the uploaded image URL
      alert("File uploaded successfully.");

      // send imageurl to the backend
      await sendImageToBackend(data.Location);

    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  const sendImageToBackend = async (imageUrl) => {
    const restaurantId = 1; // Replace with the actual restaurant ID
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/restaurants/${restaurant.id}`, {profile_photo: imageUrl});
      console.log('Profile photo updated successfully:', response.data);

    } catch (error) {
      console.error('Error updating profile photo:', error.message);
    }
  };

  const handleClose = () => {
    console.log('Close button clicked');
    // Implement your navigation or other logic here
    navigate(`/restaurant-dashboard/${restaurant.username}`);
  };

  return (
    <>
    <Header 
        headingText="Edit Profile" 
        closeButton={
          <button onClick={handleClose} className="button">
            Back to Dashboard
          </button>
        }
      />
    <div className='edit-form'>
      <TextField
        id="update-name" 
        margin="normal"
        type="text" 
        label="Name" 
        variant="filled"
        defaultValue={restaurant.name}
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setName(e.target.value)}
      />
      <TextField
        id="update-location" 
        margin="normal"
        type="text" 
        label="Location" 
        variant="filled"
        defaultValue={restaurant.location}
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setLocation(e.target.value)}
      />
      <TextField
        id="update-description" 
        margin="normal"
        type="text" 
        label="Description" 
        variant="filled"
        defaultValue={restaurant.description}
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setDescription(e.target.value)}
      />
      <TextField
        id="update-email" 
        margin="normal"
        type="text" 
        label="Email" 
        variant="filled"
        defaultValue={restaurant.email}
        required
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <TextField
        id="update-phone" 
        margin="normal"
        type="text" 
        label="Phone Number" 
        variant="filled"
        defaultValue={restaurant.phone_number}
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setPhoneNumber(e.target.value)}
      />
      
    </div>
    


    <div className="aws">
        <div className="photo-form">
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
          borderRadius: '50%', 
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

        {/* <button onClick = {handleEditProfile}>SAVE</button> */}
    <button className='save-button' 
        onClick={()=> {
          handleEditProfile();
            navigate(`/restaurant-dashboard/${restaurant.username}`); 
        }}>SAVE</button>
    </>
  )
}

export default EditProfilePageRestaurant