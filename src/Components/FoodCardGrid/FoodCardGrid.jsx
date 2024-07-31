import React from 'react';
import './FoodCardGrid.css';
import FoodCard from '../FoodCard/FoodCard';
import {useState, useEffect} from 'react';
import { useShoppingCart } from "../../Context/ShoppingCartContext"

const FoodCardGrid = ({restaurantListings, allRestaurants}) => {
    const { shoppingCart, setShoppingCart } = useShoppingCart();
    console.log(restaurantListings);
    console.log(allRestaurants);

    console.log("shoppingcart!!!", shoppingCart);

    // listing_id: quantity
    // useState({1:10, 2:0, 3:11})

    useEffect(()=> {
        const intialValue = {};
        if (restaurantListings.length > 0) {
            const initializer = restaurantListings.reduce((accumulated, listing) => {
                const currentValue = shoppingCart[`${listing.id}`] ?? 0;
                console.log("current value: ", currentValue);
                return {...accumulated, [`${listing.id}`]: currentValue}
            }, intialValue);
        
            console.log("initializer", initializer);
            setShoppingCart(initializer);
        }
    },[restaurantListings])

    let newRestaurantListings = restaurantListings.filter((listing) => listing.quantity > 0);

    return (
        <>
        <div className= "restaurantListingsGrid">
            {newRestaurantListings.map((listing) => {
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