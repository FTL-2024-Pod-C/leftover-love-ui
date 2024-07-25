import React, { useState } from 'react';
import "./RestaurantCard.css";

const RestaurantCard = ({name, expiration_date, photo_url}) => {
  console.log(name);
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
            <h2 className="foodCardName">{name}</h2>
            <h4 className="expirationDate">{expiration_date}</h4>
        </div>
    </div>
  );
}

export default RestaurantCard