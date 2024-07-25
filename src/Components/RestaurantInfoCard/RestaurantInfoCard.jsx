import React from 'react'
import "./RestaurantInfoCard.css";

const RestaurantInfoCard = ({name, location, description, email, phone_number}) => {
    return (
    <div classname="restaurantCardBox">
        <img className="restaurantBoxImage" src="https://via.placeholder.com/150"/>
        <div className="restaurantBoxDetails">
            <h2 className="restaurantBoxName">{name}</h2>
            <h3 className="restaurantBoxLocation">City, State</h3>
            <h4 className="restaurantBoxContact">email@email.com | 234-567-8910</h4>
        </div> 
    </div>
    )
}
  
  export default RestaurantInfoCard;