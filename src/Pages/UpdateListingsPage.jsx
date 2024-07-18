import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './UpdateListings.css'

const UpdateListingsPage = () => {
  return (
    <>
    <div className='update-listings-header'>
        <h1>Update Listings</h1>
        <div>
        <IconButton>
            <CloseIcon />
        </IconButton>
        </div>
    </div>
   

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
            variant="outlined"
        />
        <TextField
            id="outlined-basic" 
            type="text" 
            label="Description" 
            variant="outlined"
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Quantity" 
            variant="outlined"
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Category" 
            variant="outlined"
        />
         <TextField
            id="outlined-basic" 
            type="text" 
            label="Best By" 
            variant="outlined"
        />
        <Button variant="contained" color="primary">
            Add Item
        </Button>
    </form>
</div>

</div>
    

    </>
  )
}

export default UpdateListingsPage