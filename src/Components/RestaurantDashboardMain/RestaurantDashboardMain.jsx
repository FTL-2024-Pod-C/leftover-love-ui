import React from 'react'
import "./RestaurantDashboardMain.css";
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';

const RestaurantDashboardMain = () => {
  return (
    <>
    <div className="restaurantDashboardMainBox">
        <div className="currentListingsBox">
            <h1 className="boxTitles">Current Listings</h1>
            <RestaurantCard />
        </div>
        <div className="currentRequestsBox">
            <h1 className="boxTitles">Current Requests</h1>
            <RestaurantCard />
        </div>
    </div>
    </>
  )
}

export default RestaurantDashboardMain