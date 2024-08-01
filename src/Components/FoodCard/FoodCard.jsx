import React, { useState } from 'react';
// import {useNavigate, useLocation} from "react-router-dom"
import "./FoodCard.css";

const FoodCard = ({listingId, name, expiration_date, restaurantName, quantity, unit, shoppingCart, setShoppingCart, photo}) => {
    // Handles adding/subtracting in field box
    //const[userQuantity, setUserQuantity] = useState(0);
    const handleIncrement = () => {
        setShoppingCart(prev=>{
            // if (!prev[listingId]) {
            //     return {
            //         [`${listingId}`]: 1, 
            //         ...prev
            //     }
            // }
            //console.log('increment', prev )
            
            const newValue = prev[listingId] < quantity ? prev[listingId] + 1 : quantity;
            return {...prev, [`${listingId}`]: newValue}
        })
        // setShoppingCart(prevQuantity => prevQuantity < quantity ? prevQuantity + 1 : quantity);
    };
    const handleDecrement = () => {
        setShoppingCart(prev => {
            // if (!prev[listingId]) {
            //     return {[`${listingId}`]: 0, ...prev}
            // }
            const newValue = prev[listingId] > 1 ? prev[listingId] - 1 : 0;
            return { ...prev, [`${listingId}`]: newValue}
        })
        // setUserQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0));
    };
    // const handleChange = (event) => {
    //     const value = parseInt(event.target.value, 10);
    //     if (!isNaN(value) && value > 0) {
    //         setUserQuantity(value); 
    //     }
    // };

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