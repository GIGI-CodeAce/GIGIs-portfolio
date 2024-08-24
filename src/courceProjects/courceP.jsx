import React from 'react';
import './courceStyle.css'
import App from '../Data/App.jsx'
import AppData from '../Data/appData.js'

function CourceProjects() {

  let Apps = AppData()

  return (
    <>
      {/* <div className='projects--category'>
        <h2>Cource projects</h2>
      </div>

      <div className='projects'>
        {Apps.map((item) => (
          <div className='project-item' key={item.id}>
            <App
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          </div>
        ))}
      </div> */}
    </>
  )
}

export default CourceProjects