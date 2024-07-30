import React from 'react'
import "./RestaurantInfoCard.css";
import { useNavigate } from 'react-router-dom';

const RestaurantInfoCard = ({username, name, location, email, phone_number, profile_photo}) => {
    const navigate = useNavigate();
    
    return (
        <div className="restaurantCardBox" onClick={() => navigate(`/restaurant-profile/${username}`)}>
            <img className="restaurantBoxImage" src={profile_photo}/>
            <div className="restaurantBoxDetails">
                <h2 className="restaurantBoxName">{name}</h2>
                <h3 className="restaurantBoxLocation">{location}e</h3>
                <h4 className="restaurantBoxContact">{email} | {phone_number}</h4>
            </div> 
        </div>
    )
}
  
  export default RestaurantInfoCard;