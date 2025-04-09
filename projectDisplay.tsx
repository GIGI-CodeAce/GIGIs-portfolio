import { useState } from "react";
import './src/OtherStyles/Mobile.css'

function App(props:any) {

    function WarningPop({ onClose }: any) {
        return (
        <main>
            <div onClick={onClose} className='warning-blur'></div>
            <section className='popup-container'>
                <button onClick={onClose} id="exit-settings">X</button>
                <p>Oh, wait!</p>
                <p>You appear to be on a small device.</p>
                <p>The website you are trying to access does not meet the recommended requirements for similar mobile
                    devices. As a result, some UI elements and controls may not work as intended.</p>
                <div className="warning-buttons">
                <button className='mobileBackBtn' onClick={onClose}>Go back</button>
                <button className='mobileVisitBtn' onClick={() => window.open(props.link, '_blank')}>Visit anyway</button>
                </div></section>
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