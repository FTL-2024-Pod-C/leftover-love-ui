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
    console.log(tokenDecoded);
    setFoodPantryId(tokenDecoded.foodPantryId);
    // createRequest(foodPantryId, "pending")
  },[])

  const createRequest = async (foodPantryId, status) => {
    const reqData = {
      food_pantry_id: foodPantryId, 
      status
    };
    console.log(foodPantryId);
    const url = `${import.meta.env.VITE_BACKEND_URL}/requests`;
    const response = await axios.post(url, reqData);
    console.log(response.data);
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

  console.log(shoppingCart);
  
  const cartItems = Object.keys(shoppingCart).filter((item) => shoppingCart[item] > 0);

  const handleClose = () => {
    console.log('Close button clicked');
    // Implement your navigation or other logic here
    navigate(`/food-dashboard/${foodPantry.username}`);
  };
  
  return (
    <>
        <Header 
          headingText="Your Cart"
          closeButton={
          <button onClick={handleClose} className="button">
            Back to Dashboard
          </button>
        }/>

        <button className="requestButton" onClick={() => createRequest(foodPantryId, "pending")}>Request</button>
        {cartItems.map((item) => (
           <CartItem
            listing={restaurantListings.find((r) => {
              return parseInt(item) == r.id
          })}
            quantity={shoppingCart[item]}
           />
        ))}
    </>
  )
}

export default CartPage