import React, { useState } from 'react';
import "./RestaurantCard.css";

const RestaurantCard = ({name, expiration_date}) => {
  console.log(name);
  return (
    <div className="foodCardBox">
        <img className="foodCardImage" src="https://via.placeholder.com/150"/>
        <div className="foodCardDetails">
            <h2 className="foodCardName">{name}</h2>
            <h4 className="expirationDate">{expiration_date}</h4>
        </div>
    </div>
  );
}

export default RestaurantCard