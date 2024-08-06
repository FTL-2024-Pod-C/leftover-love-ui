import React from 'react'
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import "./AllRestaurantsItem.css"

const AllRestaurantsItem = ({allRestaurants}) => {
  return (
    <>
    <div className="restaurantsGrid"> 
      {allRestaurants.map((restaurant) => (
        <RestaurantInfoCard 
          key={restaurant.id}
          name={restaurant.name}
          location={restaurant.location}
          email={restaurant.email}
          phone_number={restaurant.phone_number}
          profile_photo={restaurant.profile_photo}
          description={restaurant.description}
        />
      ))}
    </div>
    </>
  )
}

export default AllRestaurantsItem;