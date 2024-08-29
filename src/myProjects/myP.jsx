import React from 'react';
import './myStyle.css';
import App from '../Data/App.jsx';
import AppData from '../Data/appData.js';

function MyProjects() {
    let Apps = AppData();

    return (
        <>
            <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
                <h2 id='myProjects'>My projects</h2>
            </div>

            <div className='project darkSwitchColor'>
                {Apps.map((item) => (
                    <div className='project-item darkSwitchBack darkSwitchBorder' key={item.id}>
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

export default MyProjects;