import React, {useState } from 'react';
import './courceStyle.css'
import App from '../Data/App.jsx'
import {CourceProjectsData} from '../Data/appData.js'

function CourceProjects() {

    let [toggle, setToggle] = useState(false)

    function toggleInfo(){
        setToggle((oldToggle) => !oldToggle)
    }

  let Apps = CourceProjectsData()

  return (
    <>
    <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
        <h2 id='courseApps'>Cource projects</h2>
        <abbr title='info'><div onClick={toggleInfo} className='courceInfo'>i</div></abbr>

        {toggle && 
        <div className='info'>
            These are projects i've made along online cources and completed them.
             They also present some major changes from what i've considered to be added.
        </div>}
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
  )
}

export default CourceProjects