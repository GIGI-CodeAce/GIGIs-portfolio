import './footer.css'

function Footer(){

    const githubIcon = 'https://raw.githubusercontent.com/GIGI-CodeAce/monsters-rolodex/main/src/Components/githubLogo.png'
    const youtubeIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/youtube.png'
    const gmailIcon = 'https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/others/gmail.png'

    return(
        <footer>
            <div className="right-side">
                <span>Thanks for visit</span>
            </div>
            <div className="left-side">
            <ul className="socials">

        <a href='https://www.youtube.com/@GIGI-CodeAce' target='_blank'>
        <li>YouTube <img className='redirect-icons' src={youtubeIcon}/></li>
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
    )
}

export default Footer