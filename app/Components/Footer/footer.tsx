import './footer.css'
import React from 'react'
import Image from 'next/image'

function Footer(){

    const githubIcon = 'https://raw.githubusercontent.com/GIGI-CodeAce/monsters-rolodex/main/src/Components/githubLogo.png'
    const linkedInIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/linkedIn.png'
    const gmailIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/gmail.png'

    return(
        <>
        <footer>
            <div className="right-side">
                <span><sub>v1.4.8</sub> Thanks for visit</span>
            </div>
            <div className="left-side">
            <ul className="socials">

        <a href='https://www.linkedin.com/in/dobre-robert/' target='_blank'>
        <li>LinkedIn <Image className='redirect-icons' width={20} height={20} loading='lazy' src={linkedInIcon} alt='LinkedIn icon'/></li>
        </a>
        <a href='https://github.com/GIGI-CodeAce' target='_blank'>
        <li>Github <Image className='redirect-icons' width={20} height={20} loading='lazy' src={githubIcon} alt='Github icon'/></li>
        </a>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=gigicodeace@gmail.com&su=Inquiry&body=Hello,' target='_blank'>
        <li>Gmail <Image className='redirect-icons' width={20} height={20} loading='lazy' src={gmailIcon} alt='Gmail icon'/></li>
        </a>
    </ul>
            </div>
        </footer>
        </>
    )
}

export default React.memo(Footer)