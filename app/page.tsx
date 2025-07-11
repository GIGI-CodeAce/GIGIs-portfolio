'use client';
import React, { useState, useRef, useEffect } from "react";

import Header from "./Components/Header/header";
import NavBar from "./Components/navBar/nav";
import MainProjects from "./Sections/main-projects/mainProjects";
import MoreProjects from "./Sections/More-apps/moreProjects";
import Welcome from "./Components/Welcome/welcome";
import Footer from "./Components/Footer/footer";
import "./OtherStyles/index.css";
import "./OtherStyles/Mobile.css";

const bgVidWebm =
  "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.webm"
const bgVidMp4 =
  "https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/backgrounds/webBg-vmake.mp4"

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load()
    video.play().catch(() => {})

    const interval = setInterval(() => {
      if (video.paused) {
        video.play().catch(() => {})
      }
    }, 9000);

    return () => clearInterval(interval)
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-background"
      preload="auto"
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

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  const [dontShowAgain, setDontShowAgain] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("dontShow");
      return stored ? JSON.parse(stored) : false;
    }
    return false;
  });

  const [bgSwitch, setBgSwitch] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bgSwitch") || "on";
    }
    return "on";
  });

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("dontShow", JSON.stringify(dontShowAgain))
    }
  }, [dontShowAgain, mounted])

  const bgToggle = () => {
    const newSwitchState = bgSwitch === "on" ? "off" : "on"
    setBgSwitch(newSwitchState)
    if (mounted) {
      localStorage.setItem("bgSwitch", newSwitchState)
    }
  };

  if (!mounted) return null

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
}
