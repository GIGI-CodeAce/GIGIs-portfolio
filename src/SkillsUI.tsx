import './skillsUI.css';

interface SkillsUIProps {
    skillsOpen: boolean;
    setSkillsOpen: any;
}

const skillsData = {
    "Frontend": [
        { name: "HTML", experience: "3 Years" },
        { name: "CSS", experience: "3 Years" },
        { name: "SCSS", experience: "3 Years" },
        { name: "TailwindCSS", experience: "3 Years" }
    ],
    "Programming Languages": [
        { name: "JavaScript", experience: "3 Years" },
        { name: "TypeScript", experience: "2 Years" }
    ],
    "Tools & Frameworks": [
        { name: "React.js", experience: "3 Years" },
        { name: "Vue.js", experience: "3 Months" },
        { name: "Git", experience: "3 Years" },
        { name: "Webpack", experience: "2 Years" }
    ]
};

function SkillsUI({ skillsOpen, setSkillsOpen }: SkillsUIProps) {

    function HandlePopup(){
        setSkillsOpen(false)
    }
    return (
        <>
            {skillsOpen && (
                <div className="skills-container">
                    <button onClick={HandlePopup} id="exit">X</button>
                    <h2 className="skills-title">My Skills & Experience</h2>
                    <div className="skills-wrapper">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div key={category} className="skills-category">
                                <h3 className="category-title">{category}</h3>
                                <ul className="skills-list">
                                    {skills.map((skill, index) => (
                                        <li key={index} className="skill-item">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-experience">{skill.experience}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default SkillsUI;
