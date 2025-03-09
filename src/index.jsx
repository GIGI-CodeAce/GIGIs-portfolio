import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';  // This is the correct import
import Header from './headFooter/header.jsx';
import NavBar from './navBar/nav.jsx';
import MainProjects from './main-projects/mainProjects.jsx';
import MoreProjects from './More-apps/moreProjects.jsx';
import Welcome from './welcome.jsx';
import Footer from './headFooter/footer.jsx';
import './index.css';
import './Mobile.css';

const bgVidWebm = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.webm";
const bgVidMp4 = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.mp4"; 

const VideoBackground = () => (
  <video className="video-background" autoPlay loop muted playsInline>
    <source src={bgVidWebm} type="video/webm" />
    <source src={bgVidMp4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
