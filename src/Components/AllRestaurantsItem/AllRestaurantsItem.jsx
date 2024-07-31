import React from 'react'
import "./AllRestaurantsItem.css";
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';

const AllRestaurantsItem = ({allRestaurants}) => {
  // console.log("in restaurant item: ", allRestaurants[0].name);
  
  return (
    <>
    {/* <h1 className="allRestaurantsHeader">All Restaurants</h1> */}
    <div className="restaurantsGrid"> 
      {allRestaurants.map((restaurant) => (
        <RestaurantInfoCard 
          key={restaurant.id}
          username={restaurant.username}
          name={restaurant.name}
          location={restaurant.location}
          email={restaurant.email}
          phone_number={restaurant.phone_number}
          profile_photo={restaurant.profile_photo}
        />
      ))}
    </div>
    </>
  )
}

export default AllRestaurantsItem;