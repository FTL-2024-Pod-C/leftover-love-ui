import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./FoodAvailableHeader.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const FoodAvailableHeader = ({searchInputValue, handleOnSearchInputChange, handleActiveCategoryChange}) => {

    const [category, setCategory] = useState("");

    const categories = [
        {
            label: 'All',
            value: 'all',
        },
        {
            label: 'Dairy',
            value: 'dairy',
        },
        {
            label: 'Vegetable',
            value: 'vegetable',
        },
        {
            label: 'Fruit',
            value: 'fruit',
        },
        {
            label: 'Grain',
            value: 'grain',
        },
        {
            label: 'Protein',
            value: 'protein',
        },
        {
            label: 'Meal',
            value: 'meal',
        }
        ];

        const handleCategoryChange = (event) => {
            handleActiveCategoryChange(event)
            setCategory(event.target.value);
        }

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
            
                <TextField
                    required
                    id="outlined-select-category"
                    select
                    label="Choose Category"
                    value={category}
                    variant="filled"
                    sx={{
                        backgroundColor: '#ffffff',
                    }}
                    onChange={handleCategoryChange}
                    >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>



            {/* {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))} */}

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