import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './RestaurantDashboardButtons.css';

const RestaurantDashboardButtons = ({ restaurant, listings, requestItems, requests, foodPantries}) => {
  const navigate = useNavigate();

  return (
    <div className='buttonBox'>
      <div className="allButtons">
        <Link to="/edit-profile-restaurant" state={{restaurant}}>
          <button className="dashboardButton">Edit Profile</button>
        </Link>

        {/* <button className="dashboardButton" onClick={() => navigate(`/restaurant-dashboard/${restaurant.username}`)}>
          Dashboard
        </button> */}
        
        {/* <Link to="/restaurant-profile">
          <button className="dashboardButton">View Profile</button>
        </Link> */}
         <Link to={`/restaurant-profile/${restaurant.username}`} state={{restaurant}} >
          <button className="dashboardButton">View Profile</button>
        </Link>

        {/* use state in order to pass in props to a component that isn't called directly */}
        <Link to="/add-listing" state={{restaurant}} >
          <button className="dashboardButton">Add Listing</button>
        </Link>

        {/* <Link to="/donation-history" state={{restaurant, listings, requestItems, requests, foodPantries}}>
          <button className="dashboardButton">Donation History</button>
        </Link> */}
      </div>
    </div>
  );
}

export default RestaurantDashboardButtons;
