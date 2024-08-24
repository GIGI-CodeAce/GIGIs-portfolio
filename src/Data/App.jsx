import React, { useState, useEffect } from 'react';

function App(props){
    return(
        <div className='App'>
            <img className='projectImage' src={props.img} />
            <h3 className='projectTitle'>{props.title}</h3>
            <div className='description-container'>
            <p className='description' >{props.desc}</p>
            </div>
            <button className='visitBtn' onClick={() => window.open(props.link, '_blank')}>▶</button>
        </div>
    )
}

export default App