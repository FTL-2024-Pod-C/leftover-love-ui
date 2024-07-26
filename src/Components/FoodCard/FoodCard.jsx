import React, { useState } from 'react';
// import {useNavigate, useLocation} from "react-router-dom"
import "./FoodCard.css";

const FoodCard = ({name, expiration_date, restaurantName, quantity, unit, photo}) => {
    // Handles adding/subtracting in field box
    const[userQuantity, setUserQuantity] = useState(0);
    const handleIncrement = () => {
        setUserQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setUserQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0));
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0){
            setUserQuantity(value);
        }
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
            <h3 className="foodCardRestaurant">{restaurantName}</h3>
            <h4 className="expirationDate">{expiration_date}</h4>
            <h4 className="quantity">{quantity} {unit}</h4>
        </div>
        <div className="quantityControl">
            <button onClick={handleDecrement}>-</button>
            <input 
                type="number" 
                value={userQuantity} 
                onChange={handleChange} 
                min="1"
            />
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
}

export default FoodCard