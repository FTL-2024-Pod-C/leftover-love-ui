import React from 'react'
import './CartPage.css';
import CartItem from '../Components/CartItem/CartItem.jsx';
import Header from '../Components/Header/Header.jsx'
import { useShoppingCart } from "../Context/ShoppingCartContext"
import {useState, useEffect} from 'react';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const DEV_BASE_URL = "http://localhost:3000"

const CartPage = () => {
  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const [foodPantryId, setFoodPantryId] = useState(null);
  const [request, setRequest] = useState({});

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
    const url = `${DEV_BASE_URL}/requests`;
    const response = await axios.post(url, reqData);
    console.log(response.data);
    setRequest(response.data);
  }

  console.log(shoppingCart);
  
  const cartItems = Object.keys(shoppingCart).filter((item) => shoppingCart[item] > 0);
  
  return (
    <>
        <Header headingText="Cart" closeRoute="/food-dashboard"/>
        <button className="requestButton" onClick={() => createRequest(foodPantryId, "pending")}>Request</button>
        {cartItems.map((item) => (
           <CartItem 
            listingId={parseInt(item)}
            quantity={shoppingCart[item]}
           />
        ))}
    </>
  )
}

export default CartPage