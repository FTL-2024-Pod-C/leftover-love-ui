import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import MeetTheCreatorsPage from './Pages/MeetTheCreatorsPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage.jsx';
import FoodPantryDashboard from './Pages/FoodPantryDashboard';
import RestaurantDashboard from './Pages/RestaurantDashboard';
import AddListingPage from './Pages/AddListingPage';
import CartPage from './Pages/CartPage.jsx';
import DonationHistoryPage from './Pages/DonationHistoryPage.jsx';
import AllRestaurantsPage from './Pages/AllRestaurantsPage.jsx';
import FoodPantryProfilePage from './Pages/FoodPantryProfilePage.jsx';
import RestaurantProfilePage from './Pages/RestaurantProfilePage.jsx';
import {ShoppingCartProvider } from "./Context/ShoppingCartContext";
import EditProfilePageRestaurant from './Pages/EditProfilePageRestaurant';
import EditProfilePageFoodPantry from './Pages/EditProfilePageFoodPantry';

const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/meet-the-creators" element={<MeetTheCreatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/food-dashboard/:username" element={<FoodPantryDashboard />} />
          <Route path="/restaurant-dashboard/:username" element={<RestaurantDashboard />} />
          <Route path="/edit-profile-restaurant" element={<EditProfilePageRestaurant />} />
          <Route path="/edit-profile-food" element={<EditProfilePageFoodPantry />} />
          <Route path="/add-listing" element={<AddListingPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/donation-history" element={<DonationHistoryPage />} />
          <Route path="/restaurant-list" element={<AllRestaurantsPage />} />
          <Route path="/food-profile" element={<FoodPantryProfilePage />} />
          <Route path="/restaurant-profile/:username" element={<RestaurantProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;