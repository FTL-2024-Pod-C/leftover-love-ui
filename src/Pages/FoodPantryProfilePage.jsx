import React, { useState } from 'react'
import './FoodPantryProfilePage.css';

// import ProfilePage from '../Components/ProfilePage/ProfilePage.jsx';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"

const FoodPantryProfilePage = () => {
  // get the state that was passed through
  let { state } = useLocation();
  console.log(state);
  const [foodPantry, setFoodPantry] = useState(state.foodPantry);
  const navigate = useNavigate();

  const handleClose = () => {
    console.log('Close button clicked');
    // Implement your navigation or other logic here
    navigate(`/food-dashboard/${foodPantry.username}`);
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

    {/* <ProfilePage /> */}
    <div className="wholeProfilePage">
    <div className="profilePageTopRow"> 
        <img className="profilePageImage" src={foodPantry.profile_photo}/>
        <div className="profilePageBasicInfo">
            <div className="profilePageDetails">
                <h2 className="profilePageName">{foodPantry.name}</h2>
                <h3 className="profilePageLocation">{foodPantry.location}</h3>
            </div>
            <h4 className="profilePageContact">{foodPantry.email} | {foodPantry.phone_number}</h4>
        </div>
        
        
    </div>
    <div className="profilePageBottomRow">
        <div className="profilePageDescription">
        {foodPantry.description}
        </div>
        {/* // GOOGLE MAPS API HERE */}
    </div> 
</div>
    </>
  )
}

export default FoodPantryProfilePage