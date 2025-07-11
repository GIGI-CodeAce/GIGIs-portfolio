'use client';
import './moreStyle.css';
import App from '../projectDisplay';
import { projectData } from '../main-projects/mainProjects';
import supabase from '@/app/supabase-client';
import { useState,useEffect } from 'react';

function MoreProjects() {

  const [projects, setProjects] = useState<projectData[]>([])

  useEffect(() => {
      async function fetchProjects() {
          const { data, error } = await supabase
              .from('side_apps_data')
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
    <div className='projects--category darkSwitchBack darkSwitchBorder darkSwitchColor'>
      <h2 id='more'>More apps</h2>
    </div>

    <div className='project darkSwitchColor'>
      {projects && projects.length > 0 ? (
        projects.map((item) => (
          <div className='project-item darkSwitchBack darkSwitchBorder' key={item.id}>
            <App {...item} />
          </div>
        ))
      ) : (
          <div className="loadingPlaceholderContainer">
            <h5>Also loading...</h5>
          </div>
      )}
    </div>
  </>
);
}


export default MoreProjects;