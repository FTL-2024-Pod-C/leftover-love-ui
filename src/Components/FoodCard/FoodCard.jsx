import React, { useState } from 'react';
import "./FoodCard.css";

const FoodCard = ({listingId, name, expiration_date, restaurantName, quantity, unit, shoppingCart, setShoppingCart}) => {
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
            console.log('increment', prev )
            
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
        <img className="foodCardImage" src="https://via.placeholder.com/150"/>
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
                value={shoppingCart[`${listingId}`]} 
                //onChange={handleChange} 
                //min="1"
            />
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
}

export default FoodCard