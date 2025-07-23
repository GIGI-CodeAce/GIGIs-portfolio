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
            <div className='left-side'>
                <Image className='site-logo' width={20} height={20} loading='lazy' 
                src="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/refs/heads/main/AppImages/others/mainWebNew.svg" 
                alt='Icon'/>
            </div>
                <div className="center-side">
                <span>Thanks for visit</span>
                <h4>v1.4.8</h4>
            </div>
                        <div className="right-side">
            <ul className="socials">

        <a href='https://www.linkedin.com/in/dobre-robert/' target='_blank'>
        <li>LinkedIn <Image className='redirect-icons' width={20} height={20} loading='lazy' src={linkedInIcon} alt='LinkedIn icon'/></li>
        </a>
        <a href='https://github.com/GIGI-CodeAce' target='_blank'>
        <li>Github <Image className='redirect-icons' width={20} height={20} loading='lazy' src={githubIcon} alt='Github icon'/></li>
        </a>
    </ul>
            <div>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=gigicodeace@gmail.com&su=Inquiry&body=Hello,' target='_blank'>
        <li className='gmail'>gigicodeace@gmail.com<Image className='redirect-icons' width={20} height={20} loading='lazy' src={gmailIcon} alt='Gmail icon'/></li>
        </a>
        </div>
            </div>
        </footer>
        </>
    )
}

export default React.memo(Footer)