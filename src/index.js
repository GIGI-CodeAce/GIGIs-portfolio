import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './headFooter/header.jsx';
import NavBar from './nav';
import MainProjects from './main-projects/mainProjects.jsx';
import MoreProjects from './More-apps/moreProjects.jsx';
import Welcome from './welcome.js';
import Footer from './headFooter/footer.js';
import './index.css';
import './Mobile.css';

const bgVidWebm = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.webm";
const bgVidMp4 = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.mp4"; // Optional MP4 fallback

const VideoBackground = () => {
  return (
    <video
      className="video-background"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={bgVidWebm} type="video/webm" />
      <source src={bgVidMp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [bgSwitch, setBgSwitch] = useState(() => {
    const savedBgSwitch = localStorage.getItem('bgSwitch');
    return savedBgSwitch ? savedBgSwitch : 'on';
  });

  function bgToggle() {
    const newSwitchState = bgSwitch === 'on' ? 'off' : 'on';
    setBgSwitch(newSwitchState);

    localStorage.setItem('bgSwitch', newSwitchState);
  }

  return (
    <>
      {bgSwitch === 'on' && <VideoBackground />}
      <Welcome />
      <div className='opacity'>
        <NavBar />
        <Header bgToggle={bgToggle} bgSwitch={bgSwitch} />
        <MainProjects />
        <MoreProjects />
        <Footer />
      </div>
    </>
  );
}

root.render(<App />);