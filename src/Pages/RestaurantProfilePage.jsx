import React, { useState } from 'react'
import './RestaurantProfilePage.css';
import ProfilePage from '../Components/ProfilePage/ProfilePage.jsx';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"

const RestaurantProfilePage = () => {
   // get the state that was passed through
   let { state } = useLocation();
   const [restaurant, setRestaurant] = useState(state.restaurant);
   const navigate = useNavigate();

   const handleClose = () => {
    console.log('Close button clicked');
    // Implement your navigation or other logic here
    navigate(`/restaurant-dashboard/${restaurant.username}`);
  };

  return (
    <>
        <Header 
        headingText="Profile Page" 
        closeButton={
          <button onClick={handleClose} className="button">
            Back to Dashboard
          </button>
        }
      />

        <ProfilePage />
    </>
  )
}

export default RestaurantProfilePage

