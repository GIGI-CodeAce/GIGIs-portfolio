'use client';
import { useState, useEffect } from 'react';
import './sliderStyles.css';
import React from 'react';
import Image from 'next/image';
import supabase from '../../supabase-client'
import { projectData } from '../../Sections/main-projects/mainProjects';

function Slider() {
    const [projects, setProjects] = useState<projectData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase
                .from('main_apps_data')
                .select('*')
                .order('id', { ascending: false })

            if (error) {
                console.error('Error fetching Projects:', error)
                return;
            }

            setProjects(data || [])
        }
        fetchProjects();
    }, []);

    useEffect(() => {
        if (projects.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            )
            setAnimationKey((prevKey) => prevKey + 1)
        }, 15000);

        return () => clearInterval(interval)
    }, [projects])

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationKey((prevKey) => prevKey + 1)
    };

    const currentProject = projects[currentIndex]

    if (!currentProject) return null;

    return (
        <div className="container darkSwitchColor" key={animationKey}>
            <Image id="sliderImg" width={200} height={190} src={currentProject.img} alt={currentProject.title} unoptimized/>
            <h1 id="title">{currentProject.title}</h1>
            <div className="desc">
                {currentProject.simpleDesc}
                <a href={currentProject.repo} target="_blank" rel="noopener noreferrer">
                    <abbr title="Github repo"><span className="git git2"></span></abbr>
                </a>
                <Image id="img2" width={200} height={190} loading='lazy' src={currentProject.img} alt="Project Detail" unoptimized/>
            </div>
            <button onClick={nextImage} id="next">{'>'}</button>
        </div>
    );
}

export default React.memo(Slider)
