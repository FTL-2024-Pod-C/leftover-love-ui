import React, { useState } from 'react';
import "./RestaurantCard.css";
import axios from "axios";

const RestaurantCard = ({handleDeleteListing, id, name, quantity, unit, expiration_date, photo_url}) => {

  const handleDeletingListing = async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/listings/${id}`;
    const response = await axios.delete(url);
    handleDeleteListing(); // Notify parent component
  };
  
  return (
    <div className="foodCardBox">
        <img className="foodCardImage" src={photo_url}
            alt="Listing Image"
            style={{ 
              width: '300px', 
              height: '300px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
              overflow: 'hidden',  
              border: '1px solid #ccc',
              objectFit: 'cover' }}
            />
        <div className="foodCardDetails">
            <h4 className="foodCardName">{name}</h4>
            <h4 className="foodCardQuantity">Total Quantity: {quantity} {unit}</h4>
            <h4 className="expirationDate">Expiration Date: {expiration_date}</h4>
            <button className="delete-btn" onClick={() => handleDeletingListing()}>Delete</button>
        </div>
    </div>
  );
}

export default RestaurantCard