import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.jsx';
import NavBar from './nav';
import MyProjects from './myProjects/myP.jsx';
import CourceProjects from './courceProjects/courceP.jsx';
import './Mobile.css';
import './index.css';

const bgVid = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/bg.mp4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {window.innerWidth > 550 ? (
      <video className="video-background" autoPlay loop muted playsInline src={bgVid} />
      ) : (
        <div className="video-background">
        <img src='https://github.com/GIGIsOtherStuff/mainWebMedia/raw/main/AppImages/others/bgGif.gif' alt="Background" />
        </div>
      )}
      <NavBar />
      <Header />
      <MyProjects />
      <CourceProjects />
    </>
  );