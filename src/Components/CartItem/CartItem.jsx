import React from 'react'
import "./CartItem.css";



const CartItem = ({listing, quantity, restaurantName}) => {
  return (
    <>
    {/* <button className="requestButton">Request</button> */}
    <div className="cartItemBox">
        <div className="cartItemLeftSide">   
            <img className="cartItemImage" src={listing.photo_url}/>
            <div className="cartItemDetails">
                <h2 className="cartItemName">{listing.name}</h2>
                <h3 className="cartItemRestaurant">{restaurantName}</h3>
                {/* <h4 className="cartItemLocation">{quantity}</h4> */}
                <h5 className="cartItemExpiration">Expiration Date: {listing.expiration_date}</h5>
            </div>
        </div> 
        <div className="cartItemRightSide">
            <h2 className="cartItemQuantity">Quantity: {quantity}</h2>
            <button className="deleteItemButton">Delete</button>
        </div>
    </div>
    </>
  )
}

export default CartItem