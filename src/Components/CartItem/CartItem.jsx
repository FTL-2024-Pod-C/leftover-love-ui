import React from 'react'
import "./CartItem.css";

const CartItem = () => {
  return (
    <>
    <button className="requestButton">Request</button>
    <div className="cartItemBox">
        <div className="cartItemLeftSide">   
            <img className="cartItemImage" src="https://via.placeholder.com/150"/>
            <div className="cartItemDetails">
                <h2 className="cartItemName">Food Item</h2>
                <h3 className="cartItemRestaurant">Restaurant Name</h3>
                <h4 className="cartItemLocation">City, State</h4>
                <h5 className="cartItemExpiration">Expiration Date: 1/23/24</h5>
            </div>
        </div> 
        <div className="cartItemRightSide">
            <h2 className="cartItemQuantity">Quantity: 1</h2>
            <button className="deleteItemButton">Delete</button>
        </div>
    </div>
    </>
  )
}

export default CartItem