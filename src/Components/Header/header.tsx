import { useState, useEffect } from "react"
import SkillsUI from "../FullSkills/SkillsUI"
import React from "react"
import supabase from "../../supabase-client"
import "./header.css"

interface HeaderProps {
  bgToggle: () => void
  bgSwitch: string
}

interface TechnologiesDataLayout{
  id: number
  alt: string
  link: string
  icon: string
}

const specialArray: string[] = ["!", "!!", "?", "??", "", "Umm", 
                                "Friend", "Innovator","Visitor", "Developer", "Passionate",
                                 "User", "Traveler","Creator","Explorer","Dreamer"]

const getRandomItemFromArray = (array: string[]): string => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]
};

const Header: React.FC<HeaderProps> = ({ bgToggle, bgSwitch }) => {
  const [specialCharacters, setSpecialCharacters] = useState<string>(getRandomItemFromArray(specialArray))
  const [glitch, setGlitch] = useState<boolean>(false)
  const [color, setColor] = useState<string>("white")
  const [color2, setColor2] = useState<string>("black")
  const [backColor, setBackColor] = useState<string>("")
  const [btnBack, setBtnBack] = useState<string>("")
  const [openSkills, setOpenSkills] = useState<boolean>(false)

  const [featuredTech, setFeaturedTech] = useState<TechnologiesDataLayout[]>([])

  const handleClick = () => {
    setOpenSkills((prev) => !prev)
  };

      useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase
                .from('featuredTech')
                .select('*')
                .order('id')
                
            if (error) {
                console.error('Error fetching Projects:', error);
                return;
            }

            setFeaturedTech(data || [])
        }
        fetchProjects();
    }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialCharacters(getRandomItemFromArray(specialArray));
      setGlitch(Math.random() > 0.6);
    }, 1500);

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleDblClick = () => {
      setColor("black")
      setColor2("white")
      setBackColor("hsla(0, 0%, 0%, 0.2)")
      setBtnBack("hsl(0, 0%, 10%)")

      setTimeout(() => {
        setColor("white")
        setColor2("black")
        setBackColor("hsla(0, 0%, 100%, 0.2)")
        setBtnBack("white")
      }, 500);
    };

    document.addEventListener("dblclick", handleDblClick);
    return () => document.removeEventListener("dblclick", handleDblClick)
  }, []);


        const [visibleCount, setVisibleCount] = useState(0);

      useEffect(() => {
        if (featuredTech.length === 0) return

        const interval = setInterval(() => {
          setVisibleCount((prev) => {
            if (prev >= featuredTech.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 50);

        return () => clearInterval(interval);
      }, [featuredTech])

  return (
    <>
      <header className="header-container">
        <h1 
          id="welcomeMessage" 
          className={`darkSwitchColor transition-all duration-300 ease-in-out ${glitch ? "glitch" : ""}`}
        >
          Welcome 
          {specialCharacters && <span className="special"> {specialCharacters}</span>}
        </h1>
        <div onClick={bgToggle} className={`bg-slider ${bgSwitch}`}>
        <div className={`switch ${glitch ? 'switch-blue' : ''}`}></div><br/>
          <h5>{bgSwitch === "on" ? "bg" : "no-bg"}</h5>
        </div>
      </header>

      <div className="moreAbout">
        <div className="litteTalk">
          <b><span id="me" className="darkSwitchColor">
              A passionate web Developer.
            </span>
            <br />
            <span id="me" className="darkSwitchColor">Dobre Robert</span>
          </b><br />

<div className={`tech-icons ${glitch ? "glitch-active" : ""}`}>
  {featuredTech.slice(0, visibleCount).map((tech) => (
    <abbr key={tech.id} title={tech.alt} className="techContainer">
      <a href={tech.link} target="_blank" className="Recources" rel="noreferrer">
        <img src={tech.icon} alt={tech.alt} />
      </a>
    </abbr>
  ))}
</div>


          <div className="skillInfo">
            <a href="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/resume.pdf" download="resume.pdf">
              <button className="resume">My Resume</button>
            </a>-
            <button onClick={handleClick} className="resume">
              Full Skills
            </button>
          </div>
        </div>
        <div className="vidContainer">
        <iframe
          className={`video ${glitch ? 'videoGlitch' : ''}`}
          width="560"
          loading="lazy"
          height="315"
          src="https://www.youtube.com/embed/T3e0iaCirdI?mute=1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
        </div>
      </div>

    <style>{`
        .darkSwitchColor {
          color: ${color};
          transition: color 0.5s ease-in-out;
        }

        .glitch {
          text-shadow: 2px 0 red, -2px 0 blue;
          animation: glitch-effect 0.3s infinite alternate;
        }

        @keyframes glitch-effect {
          0% {
            transform: translateX(-2px);
          }
          100% {
            transform: translateX(2px);
          }
        }
        .visitBtn {
          color: ${color2};
          background-color: ${btnBack};
        }
`}</style>
      <SkillsUI skillsOpen={openSkills} setSkillsOpen={setOpenSkills} />
    </>
  );
}

export default React.memo(Header)