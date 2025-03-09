import React from 'react';
import './moreStyle.css';
import App from '../Data/App.jsx';
import { MoreProjectsData } from '../Data/appData.js';

function MoreProjects() {

  let Apps = MoreProjectsData();

  return (
    <>
      <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
        <h2 id='more'>More apps</h2>
      </div>

      <div className='project darkSwitchColor'>
        {Apps.map((item) => (
            <div className='project-item darkSwitchBack darkSwitchBorder' key={item.id}>
              <App
              {...item}
              />
            </div>
        ))}
      </div>
    </>
  );
}


export default MoreProjects;