import React, { useState } from 'react';
import "./FoodCard.css";

const FoodCard = ({listingId, name, expiration_date, restaurantName, quantity, unit, shoppingCart, setShoppingCart, photo}) => {
    const handleIncrement = () => {
        setShoppingCart(prev=>{
            
            const newValue = prev[listingId] < quantity ? prev[listingId] + 1 : quantity;
            return {...prev, [`${listingId}`]: newValue}
        })
    };
    const handleDecrement = () => {
        setShoppingCart(prev => {
            const newValue = prev[listingId] > 1 ? prev[listingId] - 1 : 0;
            return { ...prev, [`${listingId}`]: newValue}
        })
    };

  return (
    <div className="foodCardBox">
        <img className="foodCardImage" src={photo}
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
            <h4 className="foodCardRestaurant">Restaurant: {restaurantName}</h4>
            <h4 className="expirationDate">Expiration Date: {expiration_date}</h4>
            <h4 className="quantity">{quantity} {unit}</h4>
        </div>
        <div className="quantityControl">
            <button onClick={handleDecrement}>-</button>
            <input 
                value={shoppingCart[`${listingId}`]} 
            />
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
}

export default FoodCard