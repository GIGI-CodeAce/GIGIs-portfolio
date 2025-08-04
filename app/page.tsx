'use client';
import React, { useState, useEffect } from "react";

import Header from "./Components/Header/header";
import NavBar from "./Components/navBar/nav";
import MainProjects from "./Sections/main-projects/mainProjects";
import MoreProjects from "./Sections/More-apps/moreProjects";
import Welcome from "./Components/Welcome/welcome";
import Footer from "./Components/Footer/footer";
import VideoBackground from "./videoBackground";
import "./OtherStyles/index.css";
import "./OtherStyles/Mobile.css";


export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  const [dontShowAgain, setDontShowAgain] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("dontShow")
      return stored ? JSON.parse(stored) : false
    }
    return false
  });

  const [bgSwitch, setBgSwitch] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bgSwitch") || "on"
    }
    return "on"
  });

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()

    if (e.ctrlKey && key === 'x') {
      e.preventDefault()
      bgToggle()
    }

    if (e.ctrlKey && key === 'z') {
      e.preventDefault()
      setDontShowAgain((old)=> !old)
    }
  };

  window.addEventListener('keydown', handleKeyDown)
  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  };
}, [bgSwitch, dontShowAgain, mounted])



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
        <Footer dontShowAgain={dontShowAgain} setDontShowAgain={setDontShowAgain}/>
      </div>
    </>
  );
}
