import { useState, useEffect } from 'react';
import './welcome.css';

function Welcome() {
    const [helloTrigger, setHelloTrigger] = useState(true);
    const [displaySite, setDisplaySite] = useState('none');
    const [siteOpacity, setSiteOpacity] = useState('0')
    const [animateHello, setAnimateHello] = useState(false);
    const [animateOpacity, setAnimateOpacity] = useState(false);

    const greetings = [
        { greeting: "Hello", flag: "🇬🇧" },   // English (UK)
        { greeting: "Bonjour", flag: "🇫🇷" }, // French (France)
        { greeting: "Ciao", flag: "🇮🇹" },    // Italian (Italy)
        { greeting: "Bună", flag: "🇷🇴" },    // Romanian (Romania)
        { greeting: "Hola", flag: "🇪🇸" },    // Spanish (Spain)
        { greeting: "Hallo", flag: "🇩🇪" },   // German (Germany)
        { greeting: "Olá", flag: "🇵🇹" },     // Portuguese (Portugal)
        { greeting: "Konnichiwa", flag: "🇯🇵" }, // Japanese (Japan)
        { greeting: "Nǐ hǎo", flag: "🇨🇳" }   // Chinese (China)
    ];

    const [randGreeting, setRandGreeting] = useState(getRandomGreeting());

    function getRandomGreeting() {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        return greetings[randomIndex];
    }

    function handleContinue() {
        setTimeout(() => {
            setAnimateHello(true);
        }, 100);
    }


    useEffect(() => {
        if (animateHello) {
            setDisplaySite('block');
            const timer1 = setTimeout(() => {
                setHelloTrigger(false);
                setSiteOpacity('1')
                setAnimateOpacity(true);
            }, 1000);
            return () => clearTimeout(timer1);
        }
    }, [animateHello]);

    return (
        <>
            {helloTrigger && 
                <div onClick={handleContinue} className={`hello ${animateHello ? 'shadeIn' : ''}`}>
                    <div className='mainGreeting'>
                        <h2>{randGreeting.greeting}<sup>{randGreeting.flag}</sup></h2>
                        <h2>👋</h2>
                        <h2 id='continueMsg'>Click anywhere to continue</h2>
                    </div>
                </div>
            }

            <div className={`opacity ${animateOpacity ? 'fadeIn' : ''}`} style={{ display: displaySite }}>
            </div>

            <style>{`
                .opacity {
                    display: ${displaySite};
                    opacity: ${siteOpacity};

                    transition: opacity 1s ease;
                }
                .fadeIn {
                    animation: shade 1s ease forwards; /* Match this duration to your intended timing */
                }
                .shadeIn {
                    animation: shadeIn 1s ease forwards; /* Ensure this matches your .hello animation */
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