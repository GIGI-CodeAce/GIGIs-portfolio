import react, { useEffect } from "react";
import './nav.css'

function NavBar(){

    return(
        <nav>
            <ul className="darkSwitchBack darkSwitchColor">
            <li>GIGI-CodeAce</li>
            <li>Home</li>
            <li>My apps</li>
            <li>Cource Apps</li>
            </ul>
        </nav>
    )
}

export default NavBar;