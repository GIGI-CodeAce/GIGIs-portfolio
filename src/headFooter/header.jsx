import React, { useState, useEffect } from 'react';
import './header.css';

function Header({bgToggle, bgSwitch}) {
  const specialArray = ['!', '!!', '?', '??', ''];

  function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const [specialCharacters, setSpecialCharacters] = useState(getRandomItemFromArray(specialArray));
  const [isStyleActive, setIsStyleActive] = useState(false);
  const [color, setColor] = useState('white');
  const [color2, setColor2] = useState('black');
  const [backColor, setBackColor] = useState('');
  const [btnBack, setBtnBack] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialCharacters(getRandomItemFromArray(specialArray));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setColor('black');
      setColor2('white');
      setBackColor('hsla(0, 0%, 0%, 0.2)');
      setBtnBack('hsl(0, 0%, 10%)');
      
      setTimeout(() => {
        setColor('white');
        setColor2('black');
        setBackColor('hsla(0, 0%, 100%, 0.2)');
        setBtnBack('white');
      }, 500);
    };

    document.addEventListener('dblclick', handleClick);

    return () => {
      document.removeEventListener('dblclick', handleClick);
    };
  }, []);

  return (
    <>
      <header className="header-container">
        <h1 id="welcome" className={`darkSwitchColor ${isStyleActive ? 'active' : ''}`}>
          Welcome{specialCharacters}
        </h1>
        <div onClick={bgToggle} className={`bg-slider ${bgSwitch}`}>
          <div className="switch"></div>
          <br/><h5>{bgSwitch === 'on' ? "bg" : 'no-bg'}</h5>
        </div>
      </header>
      <div className='moreAbout'>
        <div className='litteTalk'>
          <b> 
            <span id='me' className='darkSwitchColor'>A highly passionate web Developer.</span><br/>
            <span id='me' className='darkSwitchColor'>Dobre Robert</span>
          </b><br/>
          <span align="left"> 
          <a href="https://www.w3.org/html/" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" />
            </a> 
            <a href="https://www.w3schools.com/css/" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />
            </a> 
            <a href="https://sass-lang.com" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="react" />
            </a>
            <a href="https://tailwindcss.com" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="react" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="react" />
            </a>
            <a href="https://reactjs.org/" target="_blank" className='Recources' rel="noreferrer"> 
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
            </a> 
          </span><br/>
          <a href="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/resume.pdf" download="resume.pdf">
          <button id="resume">CURRENT RESUME</button>
            </a>
        </div>
        <div className='vidContainer'>
          <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/T3e0iaCirdI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <style>{`
        .darkSwitchColor {
          color: ${color};
          transition: color 0.5s ease-in-out;
        }

        .darkSwitchBack {
          transition: background-color 0.5s ease-in-out;
        }
          
        .visitBtn {
          color: ${color2};
          background-color: ${btnBack};
        }
      `}</style>
    </>
  );
}

export default Header;
