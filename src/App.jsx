import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import MeetTheCreatorsPage from './Pages/MeetTheCreatorsPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/meet-the-creators" element={<MeetTheCreatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* Other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;