import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import HomeCSS from './Home.module.css';

function Home() {
  return (
    <div className={HomeCSS.Home}>
      <Navbar />
      <h1>Hello World!</h1>
      <Footer />
    </div>
  );
}

export default Home;
