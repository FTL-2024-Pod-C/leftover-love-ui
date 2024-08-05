import React from 'react'
import './CartPage.css';
import CartItem from '../Components/CartItem/CartItem.jsx';
import Header from '../Components/Header/Header.jsx'
import { useShoppingCart } from "../Context/ShoppingCartContext"
import {useState, useEffect} from 'react';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom"

const CartPage = () => {
  let { state } = useLocation();

  const [foodPantry, setFoodPantry] = useState(state.foodPantry);
  const navigate = useNavigate();


  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const [foodPantryId, setFoodPantryId] = useState(null);
  const [request, setRequest] = useState({});
  const [allRestaurants, setAllRestaurants] = useState(state.allRestaurants);
  const [restaurantListings, setAllRestaurantListings] = useState(state.restaurantListings);

  useEffect(() => {
    const tokenDecoded = jwtDecode(localStorage.getItem("token"));
    setFoodPantryId(tokenDecoded.foodPantryId);
    // createRequest(foodPantryId, "pending")
  },[])

  const createRequest = async (foodPantryId, status) => {
    const reqData = {
      food_pantry_id: foodPantryId, 
      status
    };
    const url = `${import.meta.env.VITE_BACKEND_URL}/requests`;
    const response = await axios.post(url, reqData);
    setRequest(response.data);
    createRequestItems(response.data.id);
  }

  const createRequestItems = async (requestId) => {
    const cartItems = Object.keys(shoppingCart).filter((item) => shoppingCart[item] > 0);
    const requestItems = cartItems.map((item) => ({
      quantity: shoppingCart[item],
      status: "pending", 
      listing_id: parseInt(item), 
      request_id: requestId
    }))

    const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems`;
    const response = await axios.post(url, requestItems);
    setShoppingCart({});

  }
  
  const cartItems = Object.keys(shoppingCart).filter((item) => shoppingCart[item] > 0);

  const handleClose = () => {
    // Implement your navigation or other logic here
    navigate(`/food-dashboard/${foodPantry.username}`);
  };

  const handleDelete = async (listingId) => {
    setShoppingCart({...shoppingCart, [`${listingId}`]: 0});
  }
  
  return (
    <>
        <Header 
          headingText="Your Cart"
          closeButton={
          <button onClick={handleClose} className="logout-btn">
            Back to Dashboard
          </button>
        }/>

        <button className="requestButton" onClick={() => createRequest(foodPantryId, "pending")}>Request</button>
        {cartItems.map((item, i) => (
           <CartItem
            key={i}
            listing={restaurantListings.find((r) => {
              return parseInt(item) == r.id
          })}
            quantity={shoppingCart[item]}
            handleDelete={handleDelete}
           />
        ))}
    </>
  )
}

export default CartPage