import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/header";
import NavBar from "./Components/navBar/nav";
import MainProjects from "./Sections/main-projects/mainProjects";
import MoreProjects from "./Sections/More-apps/moreProjects";
import Welcome from "./Components/Welcome/welcome";
import Footer from "./Components/Footer/footer";
import "./OtherStyles/index.css"
import "./OtherStyles/Mobile.css";

const bgVidWebm = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.webm";
const bgVidMp4 = "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.mp4";

const VideoBackground: React.FC = () => (
  <video className="video-background" autoPlay loop muted playsInline>
    <source src={bgVidWebm} type="video/webm" />
    <source src={bgVidMp4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("dontShow") ?? "false");
  });

  const [bgSwitch, setBgSwitch] = useState<string>(() => {
    const savedBgSwitch = localStorage.getItem("bgSwitch");
    return savedBgSwitch ? savedBgSwitch : "on";
  });

  useEffect(() => {
      localStorage.setItem("dontShow", JSON.stringify(dontShowAgain));
  }, [dontShowAgain]);

  const bgToggle = () => {
    const newSwitchState = bgSwitch === "on" ? "off" : "on";
    setBgSwitch(newSwitchState);
    localStorage.setItem("bgSwitch", newSwitchState);
  };

  return (
    <>
      {bgSwitch === "on" && <VideoBackground />}
      {!dontShowAgain && <Welcome setDontShowAgain={setDontShowAgain} />}
      <div className="opacity">
        <NavBar />
        <Header bgToggle={bgToggle} bgSwitch={bgSwitch} />
        <MainProjects />
        <MoreProjects />
        <Footer />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
