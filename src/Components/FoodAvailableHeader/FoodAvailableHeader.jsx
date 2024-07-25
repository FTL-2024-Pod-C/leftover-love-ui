import React from 'react'
import { Link } from 'react-router-dom';
import "./FoodAvailableHeader.css";
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const FoodAvailableHeader = ({searchInputValue, handleOnSearchInputChange}) => {
  return (
    <>
        <div className="main">
            <h1 className="foodAvailableText">Food Available</h1>
            <div className="rightButtons">
                {/* This is the search bar */}
                <TextField 
                    type="text" 
                    label="Search" 
                    variant="outlined"
                    className="searchBar"
                    name="search"
                    placeholder="Search"
                    value={searchInputValue}
                    onChange={handleOnSearchInputChange}
                />

                {/* <Link to="/cart-page">
                    <button className="cartButton">Cart</button>
                </Link> */}

                <Link to="/cart-page">
                    <ShoppingCartIcon />

                </Link>
            </div>

        </div>
    </>
  )
}

export default FoodAvailableHeader;