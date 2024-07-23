import React from 'react'
import './CartPage.css';
import CartItem from '../Components/CartItem/CartItem.jsx';
import Header from '../Components/Header/Header.jsx'

const CartPage = () => {
  return (
    <>
        <Header headingText="Cart" closeRoute="/food-dashboard"/>
        <CartItem />
    </>
  )
}

export default CartPage