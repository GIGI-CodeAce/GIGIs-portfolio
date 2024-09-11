import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './headFooter/header.jsx';
import NavBar from './nav';
import MyProjects from './myProjects/myP.jsx';
import CourceProjects from './courceProjects/courceP.jsx';
import Welcome from './welcome.js'
import Footer from './headFooter/footer.js'
import './index.css';
import './Mobile.css';

const bgVid = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/bg.mp4";
const gifVid = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/bgGif.gif"

const VideoBackground = () => {
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth >= 550 ? (
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
          src={bgVid}
        />
      ) : (
        <div className="video-background">
          <img src={gifVid} alt="Background" />
        </div>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <VideoBackground/>
      <Welcome/>
      <div className='opacity'>
      <NavBar />
      <Header />
      <MyProjects />
      <CourceProjects />
      <Footer/>
      </div>
    </>
  );