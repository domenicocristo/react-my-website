import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import HomeCSS from './Home.module.css';

function Home() {
  return (
    <div className={HomeCSS.Home}>
      <Navbar />
      <div className={HomeCSS.Home__LaunchesSection}>
        <h1>Check out the launches section to stay up-to-date on upcoming space launches</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
