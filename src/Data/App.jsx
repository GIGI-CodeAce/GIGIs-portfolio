import React, { useState } from "react";
import '../Mobile.css'

function App(props) {

    function WarningPop({ onClose }) {
        return (
            <main>
                <div className='blur'></div>
                <section className='popup-container'>
                    <button onClick={onClose} id="exit-settings">X</button>
                    <p>Warning</p>
                    <p>You appear o be on a mobile device</p>
                    <p>The website you are trying to access does not meet the recommended requirements for mobile
                         devices. As a result, some UI elements and controls may not work as intended.</p>
                         <br/>
                    <button className='mobileVisitBtn' onClick={() => window.open(props.link, '_blank')}>Visit anyway</button>
                </section>
            </main>
        );
    }

    const [showWarning, setShowWarning] = useState(false);

    const handleButtonClick = () => {
        if (window.innerWidth < 550) {
            if(!props.mobile){
                setShowWarning(true);
            }else {
                window.open(props.link, '_blank');
            }
        }else {
            window.open(props.link, '_blank');
        }
    };

    const closeWarningPop = () => {
        setShowWarning(false);
    };

    return (
        <>
            <div className='App'>
            {showWarning && <WarningPop onClose={closeWarningPop} />}
                <div className='imgContainer'>
                    <img className='projectImage' src={props.img} alt="Project"/>
                    {props.mobile && <abbr title="Mobile support"><div className="computer"></div></abbr>}
                    <abbr title="Computer support"><div className="phone"></div></abbr>
                    <a href={props.repo} target="_blank" rel="noopener noreferrer">
                        <abbr title="Github repo"><div className="git"></div></abbr>
                    </a>
                </div>
                <h3 className='projectTitle'>{props.title}</h3>
                <div className='description-container'>
                    <p className='description'>{props.desc}</p>
                </div>
                <button className='visitBtn' onClick={handleButtonClick}>▶</button>
            </div>
        </>
    );
}

export default App;