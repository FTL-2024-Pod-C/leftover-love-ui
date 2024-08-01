import React, { useState } from 'react'
import './ProfilePage.css';
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
        <div className="wholeProfilePage">
    <div className="profilePageTopRow"> 
        <img className="profilePageImage" src={restaurant.profile_photo}/>
        <div className="profilePageBasicInfo">
            <div className="profilePageDetails">
                <h2 className="profilePageName">{restaurant.name}</h2>
                <h3 className="profilePageLocation">{restaurant.location}</h3>
            </div>
            <h4 className="profilePageContact">{restaurant.email} | {restaurant.phone_number}</h4>
        </div>
        
        
    </div>
    <div className="profilePageBottomRow">
        <div className="profilePageDescription">
        {restaurant.description}
        </div>
    </div> 
</div>

    </>
  )
}

export default RestaurantProfilePage

