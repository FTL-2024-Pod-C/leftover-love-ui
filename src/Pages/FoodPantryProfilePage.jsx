import React, { useState } from 'react'
import './ProfilePage.css';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"

const FoodPantryProfilePage = () => {
  // get the state that was passed through
  let { state } = useLocation();
  const [foodPantry, setFoodPantry] = useState(state.foodPantry);
  const navigate = useNavigate();

  const handleClose = () => {
    // Implement your navigation or other logic here
    navigate(`/food-dashboard/${foodPantry.username}`);
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
          <img className="profile-page-img" src={foodPantry.profile_photo}/>
          <div className="profile-page-info">
            <h2>{foodPantry.name}</h2>
            <h3>{foodPantry.location}</h3>
            <h4>{foodPantry.email} | {foodPantry.phone_number}</h4>
          {foodPantry.description}
          </div>
        </div>
    </>
  )
}

export default FoodPantryProfilePage