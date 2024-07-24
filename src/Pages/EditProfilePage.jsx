import React, { useState } from 'react'
import Header from '../Components/Header/LandingPageHeader';
import TextField from '@mui/material/TextField';
import axios from "axios";
import AWS from 'aws-sdk';

const DEV_BASE_URL = "http://localhost:3000"

const EditProfilePage = () => {

  const [file, setFile] = useState(null);

const [name, setName] = useState(null);
const [location, setLocation] = useState(null);
const [description, setDescription] = useState(null);
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState(null);
const [imageUrl, setImageUrl] = useState(null);


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
  

    // var upload = s3
    //   .putObject(params)
    //   .on("httpUploadProgress", (evt) => {
    //     console.log(
    //       "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
    //     );
    //   })
    //   .promise();

    // await upload.then((err, data) => {
    //   console.log(err);
    //   alert("File uploaded successfully.");
    // });
  };

  const sendImageToBackend = async (imageUrl) => {
    const restaurantId = 2; // Replace with the actual restaurant ID
    try {
      const response = await axios.put(`${DEV_BASE_URL}/restaurants/${restaurantId}`, {profile_photo: imageUrl});
      console.log('Profile photo updated successfully:', response.data);

    } catch (error) {
      console.error('Error updating profile photo:', error.message);
    }
  };

  const handleEditProfile = async (e) => {
    const restaurantId = 3;
    e.preventDefault();
    console.log(name);
    // register the user
    const response = await axios.put(`${DEV_BASE_URL}/restaurants/${restaurantId}`, {name, location, description, email, phoneNumber});
    console.log(response);
  }

  return (
    <>
    <Header />
    <form className='form'>
      <TextField
        id="update-name" 
        margin="normal"
        type="text" 
        label="Name" 
        variant="filled"
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
        sx={{
            backgroundColor: '#ffffff',
        }}
        onChange = {(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick = {handleEditProfile}>SAVE</button>
    </form>


    <div className="aws">
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
    </>
  )
}

export default EditProfilePage