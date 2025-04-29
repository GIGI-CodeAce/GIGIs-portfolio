import './moreStyle.css';
import App from '../../../projectDisplay.tsx';
import { projectData } from '../main-projects/mainProjects.tsx';
import supabase from '../../supabase-client.ts';
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
        {projects.map((item) => (
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