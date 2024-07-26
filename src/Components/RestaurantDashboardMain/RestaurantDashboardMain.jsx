import React from 'react'
import "./RestaurantDashboardMain.css";
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';

const RestaurantDashboardMain = ({listings}) => {
  return (
    <>
    <div className="restaurantDashboardMainBox">
        <div className="currentListingsBox">
            <h1 className="boxTitles">Current Listings</h1>
            <div className="listings">
            {listings.map((listing) => (
              <RestaurantCard 
                key={listing.id}
                name={listing.name}
                expiration_date={listing.expiration_date}
                photo_url={listing.photo_url}
                quantity={listing.quantity}
                unit={listing.unit}
              />
            ))}
            </div>
        </div>
        <div className="currentRequestsBox">
            <h1 className="boxTitles">Current Requests</h1>
            <RequestCard />
        </div>
    </div>
    </>
  )
}

export default RestaurantDashboardMain