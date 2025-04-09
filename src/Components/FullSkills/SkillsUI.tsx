import './skillsUI.css';

interface Skill {
  name: string;
  amount: number;
  timeUnit: 'Month' | 'Year';
}

interface SkillsData {
  [category: string]: Skill[];
}

interface SkillsUIProps {
  skillsOpen: boolean;
  setSkillsOpen: (open: boolean) => void;
}

const skillsData: SkillsData = {
  "Frontend": [
    { name: "HTML", amount: 3, timeUnit: 'Year' },
    { name: "CSS", amount: 3, timeUnit: 'Year' },
    { name: "SCSS", amount: 6, timeUnit: 'Month' },
    { name: "TailwindCSS", amount: 1, timeUnit: 'Year' }
  ],
  "Programming Languages": [
    { name: "JavaScript", amount: 3, timeUnit: 'Year' },
    { name: "TypeScript", amount: 1, timeUnit: 'Year' }
  ],
  "Tools & Frameworks": [
    { name: "React.js", amount: 2, timeUnit: 'Year' },
    { name: "Vue.js", amount: 3, timeUnit: 'Month' },
    { name: "Git", amount: 2, timeUnit: 'Year' },
    // { name: "Webpack", amount: 2, timeUnit: 'Year' },
    { name: "Node.js", amount: 1, timeUnit: 'Month' },
    { name: "Express.js", amount: 1, timeUnit: 'Month' }
  ]
};

const getSkillLevel = (skill: Skill): string => {
    const months = skill.timeUnit === 'Year' ? skill.amount * 12 : skill.amount;
  
    if (months < 6) return 'skill-beginner';
    if (months >= 6 && months < 24) return 'skill-intermediate';
    if (months >= 24 && months < 60) return 'skill-advanced';
    return 'skill-expert';
  };

function SkillsUI({ skillsOpen, setSkillsOpen }: SkillsUIProps) {
  const handlePopupClose = () => setSkillsOpen(false);

  if (!skillsOpen) return null;

  return (
    <div className="skills-overlay" onClick={handlePopupClose}>
      <div className="skills-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={handlePopupClose} id="exit">X</button>
        <h2 className="skills-title">My Skills & Experience</h2>
        <div className="skills-wrapper">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill.name} className={`skill-item ${getSkillLevel(skill)}`}>
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