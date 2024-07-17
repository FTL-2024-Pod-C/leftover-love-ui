import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
    <Header />
    
    <div className='title'>
      <h1>Leftover Love</h1>
      <h3>Description</h3>
      <Link to="/meet-the-creators" className='button'>Meet the Creators</Link>
    </div>

    <div className='impact'>
      <div className='stats'>
        <h2>99%</h2>
        <h3>Description</h3>
      </div>
      <div className='stats'>
        <h2>99</h2>
        <h3>Description</h3>
      </div>
      <div className='stats'>
        <h2>99/99</h2>
        <h3>Description</h3>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default LandingPage