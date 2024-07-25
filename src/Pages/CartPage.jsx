import React from 'react'
import './CartPage.css';
import CartItem from '../Components/CartItem/CartItem.jsx';
import Header from '../Components/Header/Header.jsx'
import { useShoppingCart } from "../Context/ShoppingCartContext"

const CartPage = () => {
  const { shoppingCart, setShoppingCart } = useShoppingCart();

  console.log(shoppingCart);
  
  return (
    <>
        <Header headingText="Cart" closeRoute="/food-dashboard"/>
        <CartItem />
    </>
  )
}

export default CartPage