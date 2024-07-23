// import { TextField } from '@mui/material'
// import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import React from 'react'
import Header from '../Components/Header/LandingPageHeader';

import AWS from 'aws-sdk';
import { useState } from "react";
import dotenv from 'dotenv';

// dotenv.config();

const EditProfilePage = () => {

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

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      alert("File uploaded successfully.");
    });
  };

  return (
    <>
    <Header />
    <div className="aws">
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>

    {/* <PhotoLibraryIcon
    sx={{
      backgroundColor: '#ffffff',
    }}
    />
     <TextField
      id="outlined-basic-name" 
      margin="normal"
      type="text" 
      label="Name" 
      variant="filled"
      sx={{
          backgroundColor: '#ffffff',
      }}
      />
      <TextField
      id="outlined-basic-name" 
      margin="normal"
      type="text" 
      label="Description" 
      variant="filled"
      sx={{
          backgroundColor: '#ffffff',
      }}
      />
      <TextField
      id="outlined-basic-name" 
      margin="normal"
      type="text" 
      label="Email" 
      variant="filled"
      sx={{
          backgroundColor: '#ffffff',
      }}
      />
      <TextField
      id="outlined-basic-name" 
      margin="normal"
      type="text" 
      label="Address" 
      variant="filled"
      sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px', // Example: Adding rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      />
      <button className='button'>Save</button> */}
    </>
  )
}

export default EditProfilePage