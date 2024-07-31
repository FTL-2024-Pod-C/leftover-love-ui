import React from 'react'
import "./RestaurantDashboardMain.css";
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';
import {useState, useEffect} from "react";
import axios from "axios";

const RestaurantDashboardMain = ({listings, requestItems, requests}) => {

  // console.log("restaurant id", restaurant.id);

  // useEffect (() => {
  //   console.log("in useEffect");
  //   fetchRequests();
  // }, []);

  // const fetchRequests = async () => {
  //   const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems/restaurant/${restaurant.id}`;
  //   const response = await axios.get(url);
  //   console.log("response", response);
  //   setRequests(response.data);
  //   console.log(requests);
  // }
  
  return (
    <>
    <div className="restaurantDashboardMainBox">
    <h1 className="boxTitles">Current Listings</h1>
        <div className="currentListingsBox">
            
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
        <h1 className="boxTitles">Current Requests</h1>
        <div className="currentRequestsBox">
            <div className="requests">
            {requestItems.map((requestItem) => (
              <RequestCard
                key={requestItem.id}
                quantity={requestItem.quantity}
                listing= {listings.find((l) => {
                  return parseInt(requestItem.listing_id) == l.id
                })}
                request= {requests.find((r) => {
                  return parseInt(requestItem.request_id) == r.id
                })}
              />
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default RestaurantDashboardMain