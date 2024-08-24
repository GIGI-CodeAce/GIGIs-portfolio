import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
  const specialArray = ['!', '!!', '?', '??', ''];

  function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const [specialCharacters, setSpecialCharacters] = useState(getRandomItemFromArray(specialArray));
  const [isStyleActive, setIsStyleActive] = useState(false);
  const [color, setColor] = useState('white')
  const [color2, setColor2] = useState('black')
  const [backColor, setBackColor] = useState('')
  const [btnBack, setBtnBack] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialCharacters(getRandomItemFromArray(specialArray));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setColor('black')
      setColor2('white')
      setBackColor('hsla(0, 0%, 0%, 0.2)')
      setBtnBack('hsl(0, 0%, 10%)')
      
      setTimeout(() => {
        setColor('white')
        setColor2('black')
        setBackColor('hsla(0, 0%, 100%, 0.2)')
        setBtnBack('white')
      }, 500);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
          <h1 id="welcome" className={`darkSwitchColor ${isStyleActive ? 'active' : ''}`}>
        Welcome{specialCharacters}
      </h1>
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