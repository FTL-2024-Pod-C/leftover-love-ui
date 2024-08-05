import React, { useState, useEffect } from 'react';
import "./RestaurantDashboardMain.css";
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';
import axios from 'axios';

const RestaurantDashboardMain = ({ restaurant, listings, requestItems, requests, foodPantries }) => {
  const [updatedRequestItems, setUpdatedRequestItems] = useState(requestItems);
  const [updatedListings, setUpdatedListings] = useState(listings);

  useEffect(() => {
    // Fetch updated request items from backend if needed
    const fetchRequestItems = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems`;
      const response = await axios.get(url);
      setUpdatedRequestItems(response.data);
    };

    const fetchListings = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/listings/restaurant/${restaurant.id}`;
      const response = await axios.get(url);
      setUpdatedListings(response.data);
    };

    fetchListings();
    fetchRequestItems();
  }, []); // Add dependencies if necessary

  const handleAcceptItemRequest = () => {
    // Refresh the request items list after an item is accepted
    const fetchRequestItems = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems`;
      const response = await axios.get(url);
      setUpdatedRequestItems(response.data);
    };

    fetchRequestItems();
  };

  const handleDeleteListing = () => {
    // Refresh the listings after an item is deleted
    const fetchListings = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/listings/restaurant/${restaurant.id}`;
      const response = await axios.get(url);
      setUpdatedListings(response.data);
    };

    fetchListings();
  };

  let newItems = updatedRequestItems.filter((item) => item.status === "pending");
  let newListings = updatedListings.filter((listing) => listing.quantity > 0);

  return (
    <>
      <div className="restaurantDashboardMainBox">
        <h1 className="boxTitles">Current Listings</h1>
        <div className="currentListingsBox">
          <div className="listings">
            {newListings.map((listing) => (
              <RestaurantCard
                key={listing.id}
                handleDeleteListing={handleDeleteListing}
                id={listing.id}
                name={listing.name}
                expiration_date={listing.expiration_date}
                photo_url={listing.photo_url}
                quantity={listing.quantity}
                unit={listing.unit}
              />
            ))}
          </div>
        </div>
        <h1 className="boxTitles">Current Requests</h1>
        <div className="currentRequestsBox">
          <div className="requests">
            {newItems.map((requestItem) => (
              <RequestCard
                key={requestItem.id}
                handleAcceptItemRequest={handleAcceptItemRequest}
                id={requestItem.id}
                requestItem={requestItem}
                quantity={requestItem.quantity}
                listings={listings}
                // listing={listings.find((l) => parseInt(requestItem.listing_id) === l.id)}
                request={requests.find((r) => parseInt(requestItem.request_id) === r.id)}
                foodPantries={foodPantries}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDashboardMain;
