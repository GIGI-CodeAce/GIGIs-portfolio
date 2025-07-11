'use client';
import './mainStyle.css';
import supabase from '../../supabase-client';
import App from '../projectDisplay';
import Slider from '../../Components/Slider/slider';
import { useState, useEffect } from 'react';

export interface projectData {
    id: number;
    img: string;
    title: string;
    desc: string;
    simpleDesc: string;
    link: string;
    repo: string;
    mobile: boolean;
}

function MyProjects() {
    const [projects, setProjects] = useState<projectData[]>([])

    useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase
                .from('main_apps_data')
                .select('*')
                .order('id', { ascending: false })

            if (error) {
                console.error('Error fetching Projects:', error);
                return;
            }

            setProjects(data || []);
        }
        fetchProjects();
    }, []);

    return (
        <>
            <Slider />
            <div className='projects--category main darkSwitchBack darkSwitchBorder darkSwitchColor'>
                <h2 id='myProjects'>Main projects</h2>
            </div>

            <div className='project darkSwitchColor'>
                    {projects && projects.length > 0 ? (
                    projects.map((item) => (
                        <div
                        className="project-item project-item-main darkSwitchBack darkSwitchBorder"
                        key={item.id}
                        >
                        <App {...item} />
                        </div>
                    ))
                    ) : (
                    <div className="loadingPlaceholderContainer">
                        <h5>Loading...</h5>
                    </div>
                    )}

            </div>
        </>
    );
}

export default MyProjects
