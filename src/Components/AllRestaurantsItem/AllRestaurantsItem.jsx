import React from 'react'
import "./AllRestaurantsItem.css";

const AllRestaurantsItem = () => {
  return (
    <>
    <h1 className="allRestaurantsHeader">All Restaurants</h1>
    <div className="restaurantBox"> 
        <img className="restaurantBoxImage" src="https://via.placeholder.com/150"/>
        <div className="restaurantBoxDetails">
            <h2 className="restaurantBoxName">Restaurant Name</h2>
            <h3 className="restaurantBoxLocation">City, State</h3>
            <h4 className="restaurantBoxContact">email@email.com | 234-567-8910</h4>
        </div>
    </div>
    </>
  )
}

export default AllRestaurantsItem