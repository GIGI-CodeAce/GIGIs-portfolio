import './skillsUI.css';

interface SkillsUIProps {
    skillsOpen: boolean;
}

function SkillsUI({ skillsOpen }: SkillsUIProps) {
    return (
        <>
            {skillsOpen && (
                <main>
                    <ul className="list">
                        <li className="skill">HTML</li>
                        <li className="skill">CSS</li>
                        <li className="skill">SCSS</li>
                        <li className="skill">TAILWINDCSS</li>
                        <li className="skill">JAVASCRIPT</li>
                        <li className="skill">TYPESCRIPT</li>
                    </ul>
                </main>
            )}
        </>
    );
}

export default SkillsUI;
