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
                <a href="https://github.com/GIGI-CodeAce" target="_blank">
                    <li id="gitHub-redirect">GIGI-CodeAce</li>
                </a>
                <a href="#welcome" onClick={(e) => scrollToSection(e, 'welcome')}><li>Home</li></a>
                <a href="#myProjects" onClick={(e) => scrollToSection(e, 'myProjects')}><li>My apps</li></a>
                <a href="#courseApps" onClick={(e) => scrollToSection(e, 'courseApps')}><li>Course Apps</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;