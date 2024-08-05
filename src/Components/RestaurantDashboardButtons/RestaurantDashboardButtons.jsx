import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantDashboardButtons.css';

const RestaurantDashboardButtons = ({ restaurant }) => {
  return (
    <div className='buttonBox'>
      <div className="allButtons">
        <Link to="/edit-profile-restaurant" state={{restaurant}}>
          <button className="dashboardButton">Edit Profile</button>
        </Link>
        <Link to={`/restaurant-profile/${restaurant.username}`} state={{restaurant}} >
          <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/add-listing" state={{restaurant}} >
          <button className="dashboardButton">Add Listing</button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantDashboardButtons;
