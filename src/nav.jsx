import React from "react";
import './nav.css';

function NavBar() {

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul className="darkSwitchColor darkSwitchBack">
                <a href="https://github.com/GIGI-CodeAce" target="_blank" id="gitHub-redirect">
                    <li>GIGI-CodeAce</li>
                </a>
                <li><a href="#welcome" onClick={(e) => scrollToSection(e, 'welcome')}>Home</a></li>
                <li><a href="#myProjects" onClick={(e) => scrollToSection(e, 'myProjects')}>My apps</a></li>
                <li><a href="#courseApps" onClick={(e) => scrollToSection(e, 'courseApps')}>Course Apps</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;