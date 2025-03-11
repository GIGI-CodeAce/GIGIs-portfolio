import './skillsUI.css';

interface SkillsUIProps {
    skillsOpen: boolean;
}

function SkillsUI({ skillsOpen }: SkillsUIProps) {
    return (
        <>
            {skillsOpen && (
                <div className="skills-container">
                    <ul className="skills-list">
                        <li className="skill-item">HTML</li>
                        <li className="skill-item">CSS</li>
                        <li className="skill-item">SCSS</li>
                        <li className="skill-item">TAILWINDCSS</li>
                        <li className="skill-item">JAVASCRIPT</li>
                        <li className="skill-item">TYPESCRIPT</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default SkillsUI;
