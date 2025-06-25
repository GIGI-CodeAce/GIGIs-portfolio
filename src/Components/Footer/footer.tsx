import './footer.css'
import React from 'react'

function Footer(){

    const githubIcon = 'https://raw.githubusercontent.com/GIGI-CodeAce/monsters-rolodex/main/src/Components/githubLogo.png'
    const linkedInIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/linkedIn.png'
    const gmailIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/gmail.png'

    return(
        <>
        <footer>
            <div className="right-side">
                <span><sub>v1.4.6</sub> Thanks for visit</span>
            </div>
            <div className="left-side">
            <ul className="socials">

        <a href='https://www.linkedin.com/in/dobre-robert/' target='_blank'>
        <li>LinkedIn <img className='redirect-icons' loading='lazy' src={linkedInIcon}/></li>
        </a>
        <a href='https://github.com/GIGI-CodeAce' target='_blank'>
        <li>Github <img className='redirect-icons' loading='lazy' src={githubIcon}/></li>
        </a>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=gigicodeace@gmail.com&su=Inquiry&body=Hello,' target='_blank'>
        <li>Gmail <img className='redirect-icons' loading='lazy' src={gmailIcon}/></li>
        </a>
    </ul>
            </div>
        </footer>
        </>
    )
}

export default React.memo(Footer)