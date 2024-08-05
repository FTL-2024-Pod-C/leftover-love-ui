import React from 'react'
import "./CartItem.css";

const CartItem = ({listing, quantity, restaurantName, handleDelete}) => {
  return (
    <>
    <div className="cartItemBox">
        <div className="cartItemLeftSide">   
            <img className="cartItemImage" src={listing.photo_url}/>
            <div className="cartItemDetails">
                <h2 className="cartItemName">{listing.name}</h2>
                <h3 className="cartItemRestaurant">{restaurantName}</h3>
                <h5 className="cartItemExpiration">Expiration Date: {listing.expiration_date}</h5>
            </div>
        </div> 
        <div className="cartItemRightSide">
            <h2 className="cartItemQuantity">Quantity: {quantity}</h2>
            <button className="deleteItemButton" onClick={() => handleDelete(listing.id)}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default CartItem