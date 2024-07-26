import React from 'react';
import './FoodCardGrid.css';
import FoodCard from '../FoodCard/FoodCard';
import {useState, useEffect} from 'react';
import { useShoppingCart } from "../../Context/ShoppingCartContext"

const DEV_BASE_URL = "http://localhost:3000"

const FoodCardGrid = ({restaurantListings, allRestaurants}) => {
    const { shoppingCart, setShoppingCart } = useShoppingCart();
    console.log(restaurantListings);
    console.log(allRestaurants);

    console.log("shoppingcart!!!", shoppingCart);

    // listing_id: quantity
    // useState({1:10, 2:0, 3:11})

    useEffect(()=> {
        const intialValue = {};
        const initializer = restaurantListings.reduce((accumulated, listing) => {
            return {...accumulated, [`${listing.id}`]: 0}
        }, intialValue);
        console.log("initializer", initializer);
        setShoppingCart(initializer);
    },[restaurantListings])

    return (
        <>
        <div className= "restaurantListingsGrid">
            {restaurantListings.map((listing) => {
                const restaurant = allRestaurants.find((r) => {
                    return listing.restaurant_id == r.id
                });
               return(<FoodCard 
                key={listing.id}
                listingId={listing.id}
                name={listing.name}
                expiration_date={listing.expiration_date}
                restaurantName={restaurant ? restaurant.name : ""}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                quantity={listing.quantity}
                unit={listing.unit}
                photo={listing.photo_url}
              />)
            })}
        </div>
        </>
    )
}

export default FoodCardGrid;