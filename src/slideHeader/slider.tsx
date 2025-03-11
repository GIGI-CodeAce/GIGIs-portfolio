import { useState, useEffect } from 'react';
import './sliderStyles.css';
import { MyProjectsData } from '../siteApp/appData';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const projects = MyProjectsData();
    const totalImages = projects.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalImages - 1 ? 0 : prevIndex + 1
            );
            setAnimationKey((prevKey) => prevKey + 1);
        }, 15000);

        return () => clearInterval(interval);
    }, [totalImages]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
        setAnimationKey((prevKey) => prevKey + 1);
    };

    const currentImg = projects[currentIndex].img;

    return (
        <div className="container darkSwitchColor" key={animationKey}>
            <img id="sliderImg" src={currentImg} alt={projects[currentIndex].title} />
            <h1 id="title">{projects[currentIndex].title}</h1>
            <div className="desc">
                {projects[currentIndex].simple}
                <a href={projects[currentIndex].repo} target="_blank" rel="noopener noreferrer">
                <abbr title="Github repo"><span className="git git2"></span></abbr>
                </a>
                <img id="img2" src={currentImg} alt="Project Detail" />
            </div>
            <button onClick={nextImage} id="next">{'>'}</button>
        </div>
    );
}

export default Slider;