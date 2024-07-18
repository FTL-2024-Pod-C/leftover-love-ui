import React, { useState } from 'react';
import "./RestaurantCard.css";

const RestaurantCard = () => {

  return (
    <div className="foodCardBox">
        <img className="foodCardImage" src="https://via.placeholder.com/150"/>
        <div className="foodCardDetails">
            <h2 className="foodCardName">Food Name</h2>
            <h4 className="expirationDate">Expiration Date: 1/23/24</h4>
        </div>
    </div>
  );
}

export default RestaurantCard