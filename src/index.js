import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.jsx';
import NavBar from './nav';
import MyProjects from './myProjects/myP.jsx';
import CourceProjects from './courceProjects/courceP.jsx';
import './index.css';
import './Mobile.css';

const bgVid = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/bg.mp4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {window.innerWidth > 550 ? (
      <video className="video-background" autoPlay loop muted playsInline src={bgVid} />
      ) : (
        <div className="video-background">
        <img src='https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/bgGif.gif' alt="Background" />
        </div>
      )}
      <NavBar />
      <Header />
      <MyProjects />
      <CourceProjects />
    </>
  );