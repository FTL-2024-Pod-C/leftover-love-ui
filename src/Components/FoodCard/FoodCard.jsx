import React, { useState } from 'react';
import "./FoodCard.css";

const FoodCard = (props) => {
    // Handles adding/subtracting in field box
    const[quantity, setQuantity] = useState(0);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0){
            setQuantity(value);
        }
    };

  return (
    <div className="foodCardBox">
        <img className="foodCardImage" src="https://via.placeholder.com/150"/>
        <div className="foodCardDetails">
            <h2 className="foodCardName">Food Name</h2>
            <h3 className="foodCardRestaurant">Restaurant Name</h3>
            <h4 className="expirationDate">Expiration Date: 1/23/24</h4>
        </div>
        <div className="quantityControl">
            <button onClick={handleDecrement}>-</button>
            <input 
                type="number" 
                value={quantity} 
                onChange={handleChange} 
                min="1"
            />
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
}

export default FoodCard