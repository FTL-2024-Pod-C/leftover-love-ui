// import React from 'react'
// import "./RestaurantDashboardMain.css";
// import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
// import RequestCard from '../RequestCard/RequestCard.jsx';
// import {useState, useEffect} from "react";
// import axios from "axios";

// const RestaurantDashboardMain = ({listings, requestItems, requests, foodPantries}) => {

//   //pass down onChange prop into the request card, change it in requestCard component and pass it back up.
//   // use it in useEffect for newItems filter so it will refresh that page
//   const [onChangeFilter, setOnChangeFilter] = useState(false);
//   let newItems = requestItems.filter((listing) => listing.status === "pending")

//   // useEffect(()=>{
//   //   newItems = requestItems.filter((listing) => listing.status === "pending")
//   //   console.log("newItems", newItems)
//   // }, [onChangeFilter])

//   const handleAcceptItemRequest = () => {
//     console.log("in handleAcceptItemRequest")
//     setOnChangeFilter(true)
//   }

//   // console.log("restaurant id", restaurant.id);

//   // useEffect (() => {
//   //   console.log("in useEffect");
//   //   fetchRequests();
//   // }, []);

//   // const fetchRequests = async () => {
//   //   const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems/restaurant/${restaurant.id}`;
//   //   const response = await axios.get(url);
//   //   console.log("response", response);
//   //   setRequests(response.data);
//   //   console.log(requests);
//   // }

  
//   return (
//     <>
//     <div className="restaurantDashboardMainBox">
//     <h1 className="boxTitles">Current Listings</h1>
//         <div className="currentListingsBox">
//             <div className="listings">
//             {listings.map((listing) => (
//               <RestaurantCard 
//                 key={listing.id}
//                 name={listing.name}
//                 expiration_date={listing.expiration_date}
//                 photo_url={listing.photo_url}
//                 quantity={listing.quantity}
//                 unit={listing.unit}
//               />
//             ))}
//             </div>
//         </div>
//         <h1 className="boxTitles">Current Requests</h1>
//         <div className="currentRequestsBox">
//             <div className="requests">
//             {newItems.map((requestItem) => (
//               <RequestCard
//                 key={requestItem.id}
//                 handleAcceptItemRequest={handleAcceptItemRequest}
//                 id={requestItem.id}
//                 requestItem={requestItem}
//                 quantity={requestItem.quantity}
//                 status={requestItem.status}
//                 listing= {listings.find((l) => {
//                   return parseInt(requestItem.listing_id) == l.id
//                 })}
//                 request= {requests.find((r) => {
//                   return parseInt(requestItem.request_id) == r.id
//                 })}
//                 foodPantries={foodPantries}

//               />
//             ))}
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default RestaurantDashboardMain

import React, { useState, useEffect } from 'react';
import "./RestaurantDashboardMain.css";
import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx';
import RequestCard from '../RequestCard/RequestCard.jsx';
import axios from 'axios';

const RestaurantDashboardMain = ({ listings, requestItems, requests, foodPantries }) => {
  const [updatedRequestItems, setUpdatedRequestItems] = useState(requestItems);

  useEffect(() => {
    // Fetch updated request items from backend if needed
    const fetchRequestItems = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems`;
      const response = await axios.get(url);
      setUpdatedRequestItems(response.data);
    };

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

  let newItems = updatedRequestItems.filter((item) => item.status === "pending");
  let newListings = listings.filter((listing) => listing.quantity > 0);

  return (
    <>
      <div className="restaurantDashboardMainBox">
        <h1 className="boxTitles">Current Listings</h1>
        <div className="currentListingsBox">
          <div className="listings">
            {newListings.map((listing) => (
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
            {newItems.map((requestItem) => (
              <RequestCard
                key={requestItem.id}
                handleAcceptItemRequest={handleAcceptItemRequest}
                id={requestItem.id}
                requestItem={requestItem}
                quantity={requestItem.quantity}
                listing={listings.find((l) => parseInt(requestItem.listing_id) === l.id)}
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
