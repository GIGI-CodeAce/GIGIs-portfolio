import './footer.css'

function Footer(){

    const githubIcon = 'https://raw.githubusercontent.com/GIGI-CodeAce/monsters-rolodex/main/src/Components/githubLogo.png'
    const linkedInIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/linkedIn.png'
    const gmailIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/gmail.png'

    return(
        <>
        <footer>
            <div className="right-side">
                <span><sub>1.2.5</sub> Thanks for visit</span>
            </div>
            <div className="left-side">
            <ul className="socials">

        <a href='https://www.linkedin.com/in/dobre-robert-03653b331/' target='_blank'>
        <li>LinkedIn <img className='redirect-icons' src={linkedInIcon}/></li>
        </a>
        <a href='https://github.com/GIGI-CodeAce' target='_blank'>
        <li>Github <img className='redirect-icons' src={githubIcon}/></li>
        </a>
        <a href='https://mail.google.com/mail/u/2/#inbox?compose=CllgCJTLHGFjKnxPBjNqmGGSKhhHFjgqdsdCzWzTnNTmFWtTfNkVVpbSPFxKkWLHqpXvhVvhspg' target='_blank'>
        <li>Gmail <img className='redirect-icons' src={gmailIcon}/></li>
        </a>
    </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer