import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import MeetTheCreatorsPage from './Pages/MeetTheCreatorsPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage.jsx';
import FoodPantryDashboard from './Pages/FoodPantryDashboard';
import RestaurantDashboard from './Pages/RestaurantDashboard';
import AddListingPage from './Pages/AddListingPage';
import EditProfilePage from './Pages/EditProfilePage'
import CartPage from './Pages/CartPage.jsx';
import DonationHistoryPage from './Pages/DonationHistoryPage.jsx';
import AllRestaurantsPage from './Pages/AllRestaurantsPage.jsx';
import FoodPantryProfilePage from './Pages/FoodPantryProfilePage.jsx';
import RestaurantProfilePage from './Pages/RestaurantProfilePage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/meet-the-creators" element={<MeetTheCreatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/food-dashboard" element={<FoodPantryDashboard />} />
          <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/donation-history" element={<DonationHistoryPage />} />
          <Route path="/restaurant-list" element={<AllRestaurantsPage />} />
          <Route path="/food-profile" element={<FoodPantryProfilePage />} />
          <Route path="/restaurant-profile" element={<RestaurantProfilePage />} />
          {/* Other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;