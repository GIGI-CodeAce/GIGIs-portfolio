'use client';
import { useState, useEffect } from "react";
import greetings from "./greetings.json" assert { type: "json" };
import "./welcome.css";

interface WelcomeProps {
  setDontShowAgain: (value: boolean) => void;
}

interface Greeting {
  hi: string;
  flag: string;
  continue: string;
  skip: string;
  agreeing: string;
}

type LanguageCode = keyof typeof greetings;

function Welcome({ setDontShowAgain }: WelcomeProps) {
  const [dblClick, setDblClick] = useState(false);
  const [helloTrigger, setHelloTrigger] = useState(true);
  const [displaySite, setDisplaySite] = useState<string>("none");
  const [siteOpacity, setSiteOpacity] = useState<string>("0");
  const [animateHello, setAnimateHello] = useState<boolean>(false);
  const [animateOpacity, setAnimateOpacity] = useState<boolean>(false);
  const [langLoaded, setLangLoaded] = useState<boolean>(false); // ← New state

  function getInitialLangCode(): LanguageCode {
    const lang = navigator.language.split("-")[0].toLowerCase();
    return lang in greetings ? (lang as LanguageCode) : "en";
  }

  function getLocalizedGreeting(langCode: string): Greeting {
    const validLangCode = (langCode in greetings ? langCode : "en") as LanguageCode;
    const langData = greetings[validLangCode];

    const hour = new Date().getHours();
    const timeGreeting = hour < 12 ? langData.morning : hour < 18 ? langData.afternoon : langData.evening;

    return {
      hi: timeGreeting,
      flag: langData.flag,
      continue: langData.continue,
      skip: langData.skip,
      agreeing: langData.agreeing
    };
  }

  const [greeting, setGreeting] = useState<Greeting>(() => getLocalizedGreeting(getInitialLangCode()));

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`);
        const data = await response.json();
        const rawCode = (data.country as string).toLowerCase();

        if (rawCode in greetings && rawCode !== getInitialLangCode()) {
          setGreeting(getLocalizedGreeting(rawCode as LanguageCode));
          setLangLoaded(true); // ← Set true only if IP fetched and language changed
        } else {
          setLangLoaded(false); // ← Remains fallback
        }
      } catch (error) {
        console.error("Geolocation failed, using fallback language", error);
        setLangLoaded(false); // ← Fetch failed
      }
    }

    fetchCountry();
  }, []);

  function handleContinue() {
    setTimeout(() => {
      setAnimateHello(true);
    }, 100);
  }

  function handleDontShow() {
    setTimeout(() => {
      setDontShowAgain(true);
    }, 1500);
  }

  useEffect(() => {
    if (animateHello) {
      setDisplaySite("block");
      const timer1 = setTimeout(() => {
        setHelloTrigger(false);
        setSiteOpacity("1");
        setAnimateOpacity(true);
      }, 1000);
      return () => clearTimeout(timer1);
    }
  }, [animateHello]);

  return (
    <>
      {helloTrigger && (
        <div onClick={handleContinue} className={`hello ${animateHello ? "shadeIn" : ""}`}>
          <div>
            {greeting && 
            <h2 className={langLoaded ? "mainGreeting" : "mainGreetingUnloaded"}>
              {greeting.hi} <sup>{greeting.flag}</sup>
            </h2>}
            <h2 className="greetEmoji">👋</h2>
            <h2 id="continueMsg">{greeting.continue}</h2>
            <div className="dontShowContainer">
              {!dblClick &&  <h2 onClick={(e) => {e.stopPropagation(); setDblClick(true);}} id="dontShow">{greeting.skip}</h2>}
              {dblClick && <h2 onClick={handleDontShow} id="dontShow">{greeting.agreeing}</h2>}
            </div>
          </div>
        </div>
      )}
      <div className={`opacity ${animateOpacity ? "fadeIn" : ""}`} style={{ display: displaySite }}></div>

      <style>{`
        .opacity {
          display: ${displaySite};
          opacity: ${siteOpacity};
          transition: opacity 1s ease;
        }
        .fadeIn {
          animation: shade 1s ease forwards;
        }
        .shadeIn {
          animation: shadeIn 1s ease forwards;
        }
        @keyframes shadeIn {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes shade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default Welcome;
