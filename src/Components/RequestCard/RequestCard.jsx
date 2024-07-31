import React, { useState } from 'react';
import "./RequestCard.css";

const RequestCard = ({listing, quantity, request}) => {
  console.log(listing);
  
  return (
    <div className="requestCardBox">
        <img className="requestCardImage" 
          src={listing.photo_url}
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
        <div className="requestCardDetails">
            <h2 className="requestCardName">{listing.name}</h2>
            <h4 className="requestCardQuantity">Quantity Requested: {quantity} {listing.unit}</h4>
            <h4 className="requestCardFoodPantry">Requested By:</h4>
            <h4 className="expirationDate">Requested On: {request.date}</h4>
        </div>
    </div>
  );
}

export default RequestCard