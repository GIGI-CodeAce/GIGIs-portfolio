'use client';
import './skillsUI.css';
import { useEffect, useState } from 'react';
import supabase from '../../supabase-client';

interface Skill {
  id: number;
  name: string;
  amount: number;
  timeUnit: 'Month' | 'Year';
}

interface SkillsUIProps {
  skillsOpen: boolean;
  setSkillsOpen: (open: boolean) => void;
}

const skillGroups = {
  Frontend: ['HTML', 'CSS', 'SCSS', 'TailwindCSS'],
  'Programming Languages': ['JavaScript', 'TypeScript'],
  'Tools & Frameworks': ['React.js', 'Vue.js', 'Git', 'node.js', 'Express.js']
};


function SkillsUI({ skillsOpen, setSkillsOpen }: SkillsUIProps) {
  const [skillsData, setSkillsData] = useState<Record<string, Skill[]>>({});

  useEffect(() => {
    async function fetchSkills() {
      const { data, error } = await supabase
        .from('skillsAndExperience')
        .select('*')
        .order('id', { ascending: true });

      if (error) return console.error('Error fetching skills:', error);

      const grouped: Record<string, Skill[]> = {
        Frontend: [],
        'Programming Languages': [],
        'Tools & Frameworks': []
      };
      
      data?.forEach((skill) => {
        const category = Object.entries(skillGroups).find(([, names]) =>
          names.includes(skill.name)
        )?.[0] || 'Tools & Frameworks';
      
        grouped[category].push(skill);
      });
      
      setSkillsData(grouped);
      
    }

    fetchSkills();
  }, []);

  const getSkillLevel = (skill: Skill) => {
    const months = skill.timeUnit === 'Year' ? skill.amount * 12 : skill.amount;
    if (months < 6) return 'skill-beginner';
    if (months < 24) return 'skill-intermediate';
    if (months < 60) return 'skill-advanced';
    return 'skill-expert';
  };

  if (!skillsOpen) return null;

  return (
    <div className="skills-overlay" onClick={() => setSkillsOpen(false)}>
      <div className="skills-container" onClick={(e) => e.stopPropagation()}>
        <button id="exit" onClick={() => setSkillsOpen(false)}>X</button>
        <h2 className="skills-title">My Skills & Experience</h2>
        <div className="skills-wrapper">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill.id} className={`skill-item ${getSkillLevel(skill)}`}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-experience">
                      {skill.amount}+ {skill.timeUnit}{skill.amount !== 1 ? 's' : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsUI;
