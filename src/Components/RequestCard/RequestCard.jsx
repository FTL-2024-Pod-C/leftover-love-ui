import React, { useEffect, useState } from 'react';
import "./RequestCard.css";
import axios from "axios";

const RequestCard = ({ listings, quantity, request, id, requestItem, foodPantries, handleAcceptItemRequest }) => {
  
  const [status, setStatus] = useState(requestItem.status);

  useEffect(() => {
  
  }, [status]);


  const foodPantry = foodPantries.find(p => parseInt(request.food_pantry_id) === p.id);
  const listing = listings.find(l => parseInt(requestItem.listing_id) === l.id);

  const handleAcceptRequest = async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems/${id}`;
    const response = await axios.put(url, { status: "accepted" });
    setStatus("accepted"); // Update local status
    handleAcceptItemRequest(); // Notify parent component
  };

    // Utility function to format the date
    const formatDate = (dateTime) => {
      const date = new Date(dateTime);
      return date.toLocaleDateString(); // Format to 'MM/DD/YYYY' by default
    };
  if(!listing){
    return
  }
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
          // border: '1px solid #ccc',
          objectFit: 'cover' }}
      />
      <div className="requestCardDetails">
        <h2 className="requestCardName">{listing.name}</h2>
        <h4 className="requestCardQuantity">Quantity Requested: {quantity} {listing.unit}</h4>
        <h4 className="requestCardFoodPantry">Requested By: {foodPantry.name}</h4>
        <h4 className="requestDate">Requested On: {formatDate(request.date)}</h4>
        {/* <h4 className="expirationDate">Current Status: {status}</h4> */}
        <button className="acceptButton" onClick={handleAcceptRequest}>Accept Request</button>
      </div>
    </div>
  );
};

export default RequestCard;
