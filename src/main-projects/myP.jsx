import React from 'react';
import './myStyle.css';
import App from '../Data/App.jsx';
import {MyProjectsData} from '../Data/appData.js';
import Slider from '../slideHeader/slider.js';

function MyProjects() {
    let Apps = MyProjectsData();

    return (
        <>
            <Slider
            />
            <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
                <h2 id='myProjects'>Main projects</h2>
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