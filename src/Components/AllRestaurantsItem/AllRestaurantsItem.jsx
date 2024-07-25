import React from 'react'
import "./AllRestaurantsItem.css";
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';

const AllRestaurantsItem = ({allRestaurants}) => {
  // console.log("in restaurant item: ", allRestaurants[0].name);
  
  return (
    <>
    <h1 className="allRestaurantsHeader">All Restaurants</h1>
    <div className="restaurantBox"> 
      {allRestaurants.map((restaurant) => (
        <RestaurantInfoCard 
          key={restaurant.id}
          name={restaurant.name}
          location={restaurant.location}
          description={restaurant.description}
          email={restaurant.email}
          phoneNumber={restaurant.phone_number}
        />
      ))}
    </div>
    </>
  )
}

export default AllRestaurantsItem;