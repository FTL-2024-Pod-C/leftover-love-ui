import React, { useState } from 'react'
import "./ProfilePage.css";
import {useNavigate, useLocation} from "react-router-dom"

const ProfilePage = () => {
    // get the state that was passed through
    let { state } = useLocation();
    const [restaurant, setRestaurant] = useState(state.restaurant);
    const navigate = useNavigate();

    // console.log(restaurant.email);

  return (
<>
 
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
        {/* // GOOGLE MAPS API HERE */}
    </div> 
</div>

</>
  )
}

export default ProfilePage