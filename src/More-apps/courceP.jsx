import React from 'react';
import './courceStyle.css';
import App from '../Data/App.jsx';
import { CourceProjectsData } from '../Data/appData.js';

function CourceProjects() {

  let Apps = CourceProjectsData();

  return (
    <>
      <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
        <h2 id='more'>More apps</h2>
      </div>

      <div className='project darkSwitchColor'>
        {Apps.map((item) => (
            <div className='project-item darkSwitchBack darkSwitchBorder'>
              <App
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link}
                repo={item.repo}
                mobile={item.mobile}
              />
            </div>
        ))}
      </div>
    </>
  );
}

export default CourceProjects;