import { TextField } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import React from 'react'
import Header from '../Components/Header/LandingPageHeader';

const EditProfilePage = () => {
  return (
    <>
    <Header />
    <PhotoLibraryIcon 
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
      }}
      />
      <button className='button'>Save</button>
    </>
  )
}

export default EditProfilePage