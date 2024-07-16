import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer/Footer';
import MeetTheCreatorsPage from './Pages/MeetTheCreatorsPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <BrowserRouter> {/* Use BrowserRouter instead of aliasing as Router */}
      <div className='app'>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/meet-the-creators" element={<MeetTheCreatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Other routes */}
        </Routes>

        {/* <Header />
        <LandingPage />
        <Footer /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;