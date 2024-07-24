import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRestaurant } from "../context/RestaurantContext";
import axios from "axios";
import Header from "../Components/Header/Header";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./AddListingPage.css";

const AddListingPage = () => {
  const { restaurant } = useRestaurant();
  const navigate = useNavigate();

  if (!restaurant) {
    return <div>Loading...</div>; // or handle this case as needed
  }

  const categories = [
    { label: "Dairy", value: "dairy" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Fruit", value: "fruit" },
    { label: "Grain", value: "grain" },
    { label: "Protein", value: "protein" },
    { label: "Meal", value: "meal" },
  ];

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [expiration_date, setexpiration_date] = useState("");
  const [category, setCategory] = useState("");
  const [photo_url, setPhotoURL] = useState("");

  const addListing = async () => {
    if (
      name &&
      quantity &&
      unit &&
      description &&
      expiration_date &&
      category
    ) {
      try {
        const newListing = {
          name,
          quantity,
          unit,
          description,
          expiration_date,
          category,
          photo_url: "url",
        };

        const response = await axios.post(
          `http://localhost:3000/restaurants/${restaurant.id}/listings`,
          newListing
        );

        console.log("Listing added:", response.data);

        // Clear the form fields
        setName("");
        setQuantity("");
        setUnit("");
        setDescription("");
        setexpiration_date("");
        setCategory("");
        setPhotoURL("temp.url");

        // Navigate back to the restaurant dashboard
        navigate(`/restaurant-dashboard/${restaurant.username}`);
      } catch (error) {
        console.error("Error adding listing:", error);
        alert("Failed to add listing. Please try again.");
      }
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Header headingText="Add Listing" closeRoute="/restaurant-dashboard" />

      <div className="update-listings-page">
        <div className="updatelistings">
          <img
            className="listing-img"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            style={{ width: "500px", height: "auto" }}
          />
          <form className="listing-form">
            <TextField
              id="outlined-name"
              type="text"
              label="Name of Item"
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-description"
              type="text"
              label="Description"
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id="outlined-quantity"
              type="text"
              label="Quantity"
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              id="outlined-unit"
              type="text"
              label="Unit"
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            <TextField
              required
              id="outlined-select-category"
              select
              label="Choose Category"
              value={category}
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              onChange={handleCategoryChange}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-best-by"
              type="text"
              label="Best By"
              margin="normal"
              variant="filled"
              sx={{ backgroundColor: "#ffffff" }}
              value={expiration_date}
              onChange={(e) => setexpiration_date(e.target.value)}
            />
            <button
              className="dashboardButton"
              type="button"
              onClick={addListing}
            >
              Add Listing
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddListingPage;
