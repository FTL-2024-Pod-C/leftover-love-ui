import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import LandingPageHeader from '../Components/Header/LandingPageHeader'
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
    <LandingPageHeader />
    
    <div className='title'>
      <h1>Leftover Love</h1>
      <h3>A digital platform empowering restaurants to turn surplus into sustenance for food pantries in need</h3>
      <Link to="/meet-the-creators">
        <button className='button'>Meet the Creators</button>
      </Link>
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