import React, { useState } from 'react'
import './ProfilePage.css';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"

const RestaurantProfilePage = () => {
   // get the state that was passed through
   let { state } = useLocation();
   const [restaurant, setRestaurant] = useState(state.restaurant);
   const navigate = useNavigate();

   const handleClose = () => {
    navigate(`/restaurant-dashboard/${restaurant.username}`);
  };

  return (
    <>
        <Header 
        headingText="Profile Page" 
        closeButton={
          <button onClick={handleClose} className="logout-btn">
            Back to Dashboard
          </button>
        }
        />


          <div className="profile-page-top"> 
            <img className="profile-page-img" src={restaurant.profile_photo}/>
            <div className="profile-page-info">
              <h2>{restaurant.name}</h2>
              <h3>{restaurant.location}</h3>
              <h4>{restaurant.email} | {restaurant.phone_number}</h4>
            {restaurant.description}
            </div>
          </div>


    </>
  )
}

export default RestaurantProfilePage

