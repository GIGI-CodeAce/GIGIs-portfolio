import { useState, useEffect } from "react";
import "./welcome.css";

function Welcome() {
    const [helloTrigger, setHelloTrigger] = useState(true);
    const [displaySite, setDisplaySite] = useState("none");
    const [siteOpacity, setSiteOpacity] = useState("0");
    const [animateHello, setAnimateHello] = useState(false);
    const [animateOpacity, setAnimateOpacity] = useState(false);
    const [greeting, setGreeting] = useState({ hi: "Hello", flag: "🇬🇧" });

    const greetings = {
        en: { hi: "Hello", morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", flag: "🇬🇧" },
        fr: { hi: "Bonjour", morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir", flag: "🇫🇷" },
        it: { hi: "Ciao", morning: "Buongiorno", afternoon: "Buon pomeriggio", evening: "Buonasera", flag: "🇮🇹" },
        ro: { hi: "Bună", morning: "Bună dimineața", afternoon: "Bună ziua", evening: "Bună seara", flag: "🇷🇴" },
        es: { hi: "Hola", morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", flag: "🇪🇸" },
        de: { hi: "Hallo", morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", flag: "🇩🇪" },
        pt: { hi: "Olá", morning: "Bom dia", afternoon: "Boa tarde", evening: "Boa noite", flag: "🇵🇹" },
        ja: { hi: "こんにちは", morning: "おはようございます", afternoon: "こんにちは", evening: "こんばんは", flag: "🇯🇵" },
        zh: { hi: "你好", morning: "早上好", afternoon: "下午好", evening: "晚上好", flag: "🇨🇳" },
        ko: { hi: "안녕하세요", morning: "좋은 아침", afternoon: "좋은 오후", evening: "좋은 저녁", flag: "🇰🇷" },
        ru: { hi: "Привет", morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", flag: "🇷🇺" },
        ar: { hi: "مرحبًا", morning: "صباح الخير", afternoon: "مساء الخير", evening: "تصبح على خير", flag: "🇸🇦" },
    };

    const countryToLang = {
        "US": "en", "GB": "en",
        "FR": "fr", "IT": "it",
        "RO": "ro", "ES": "es",
        "DE": "de", "PT": "pt",
        "JP": "ja", "CN": "zh",
        "KR": "ko", "IN": "hi",
        "RU": "ru", "TR": "tr",
        "AR": "ar",}

    function getLocalizedGreeting(langCode) {
        const langData = greetings[langCode] || greetings["en"];
        const hour = new Date().getHours();
        const timeGreeting = hour < 12 ? langData.morning : hour < 18 ? langData.afternoon : langData.evening;
        return { hi: `${timeGreeting}`, flag: langData.flag };
    }

    useEffect(() => {
        async function fetchCountry() {
            try {
                const response = await fetch(`https://ipinfo.io/json?token=${import.meta.env.VITE_APP_IPINFO_TOKEN}`);
                const data = await response.json();
                
                const userLang = countryToLang[data.country] || "en";
                setGreeting(getLocalizedGreeting(userLang));
            } catch (error) {
                console.error("Geolocation failed, defaulting to navigator.language", error);
                const fallbackLang = navigator.language.split("-")[0] || "en";
                setGreeting(getLocalizedGreeting(fallbackLang));
            }
        }
        fetchCountry();
    }, []);

    function handleContinue() {
        setTimeout(() => {
            setAnimateHello(true);
        }, 100);
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
                        <h2  className="mainGreeting">
                            {greeting.hi} <sup>{greeting.flag}</sup>
                        </h2>
                        <h2>👋</h2>
                        <h2 id="continueMsg">Click anywhere to continue</h2>
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
