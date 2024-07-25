import React from 'react';
import './FoodCardGrid.css';
import FoodCard from '../FoodCard/FoodCard';
import {useState, useEffect} from 'react';

const DEV_BASE_URL = "http://localhost:3000"

const FoodCardGrid = ({restaurantListings, allRestaurants}) => {
    // function getRestaurant (r) {
    //     return listing.restaurant_id == r.id
    // }

    return (
        <>
        <div className= "restaurantListingsGrid">
            {restaurantListings.map((listing) => {
                const restaurant = allRestaurants.find((r) => {
                    return listing.restaurant_id == r.id
                });
               return(<FoodCard 
                key={listing.id}
                name={listing.name}
                expiration_date={listing.expiration_date}
                restaurantName={restaurant.name}
              />)
            })}
        </div>
        </>
    )
}

export default FoodCardGrid;