import React from 'react'
import "./DonatedFoodItem.css";

const DonatedFoodItem = () => {
  return (
    <>
    <div className="donatedFoodItemBox">
        <img className="donatedFoodItemImage" src="https://via.placeholder.com/150"/>
        <h2 className="donatedFoodItemName">Food Name</h2>
        <h3 className="donatedFoodItemQuantity">Quantity: 1</h3>
    </div>
    </>
  )
}

export default DonatedFoodItem;