function urlImg(root, name) {
  return `https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/${root}/${name}.png`;
}

export function MyProjectsData() {
    return [
      {
        id: 1,
        img: urlImg('myProjectsImgs', 'memesRNG'),
        title: "MemesRNG",
        desc: "Memes RNG is a meme-filled game where random events and internet humor collide for unpredictable, have a gameplay experience and test out your luck with all of the big rarity's",
        link: "https://gigi-codeace.github.io/Memes-RNG/",
        repo: "https://github.com/GIGI-CodeAce/Memes-RNG",
        mobile: true
      },
      {
        id: 2,
        img: urlImg('myProjectsImgs', 'deathBall'),
        title: "DeathBall",
        desc: "Death Ball, a game that challenges you to navigate through dynamic obstacles, bouncing spheres, and difficulty variations. Test your reflexes and strategy as you strive to survive in this visually captivating adventure. How long can you endure the chaos and set your high score?",
        link: "https://gigi-codeace.github.io/DeathBall/DBmenu",
        repo: "https://github.com/GIGI-CodeAce/DeathBall",
        mobile: false
      },
      {
        id: 3,
        img: urlImg('myProjectsImgs', 'GigiDash'),
        title: "Gigi Dash",
        desc: "GIGI-DASH, the spike-jumping adventure that will test your reflexes and push your skills to the limit! Pushing through deadly spikes, high speeds and theme colored seasons.",
        link: "https://gigi-codeace.github.io/GIGI-DASH/GDmenu",
        repo: "https://github.com/GIGI-CodeAce/GIGI-DASH",
        mobile: false
      },
      {
        id: 4,
        img: urlImg('myProjectsImgs', 'YC-PG'),
        title: "YC&PG",
        desc: "YP&CG, your go-to website for the power of customization in code creation! Imagine a platform where you have the freedom to craft and tailor specific code patterns for your numerous needs and create as many as you need.",
        link: "https://gigi-codeace.github.io/YC-PG/CGmenu",
        repo: "https://github.com/GIGI-CodeAce/YC-PG",
        mobile: false
      },
    ]
}

export function CourceProjectsData() {
  return [
    {
      id: 1,
      img: urlImg('courceProjectsImgs', 'memeMaker'),
      title: "Memes generator",
      desc: "Memes generator is an online meme creator where you could pick a random meme from up to top 100 most popular memes from the internet and be creative with your text inputs in order to make the one meme everyone from your friends group will love! (ZTM cource)",
      link: "https://gigi-codeace.github.io/Memes-generator/",
      repo: "https://github.com/GIGI-CodeAce/Memes-generator",
      mobile: true
    },
    {
      id: 2,
      img: urlImg('courceProjectsImgs', 'airbnb'),
      title: "Airbnb clone",
      desc: "Here is a standard Airbnb clone made from an older version of their website from following up a react.js cource. (FreeCodeCamp cource)",
      link: "https://gigi-codeace.github.io/airbnb-clone/",
      repo: "https://github.com/GIGI-CodeAce/airbnb-clone",
      mobile: true
    },
    {
      id: 2,
      img: urlImg('courceProjectsImgs', 'react'),
      title: "React facts",
      desc: "A basic react app that tells you anything you need to know about react.js with its facts and redirect links. (FreeCodeCamp cource)",
      link: "https://gigi-codeace.github.io/React-facts/",
      repo: "https://github.com/GIGI-CodeAce/React-facts",
      mobile: true
    },
    {
      id: 4,
      img: urlImg('courceProjectsImgs', 'rolodex'),
      title: "Rolodex monsters",
      desc: "A classic react project that showcases handleing with multiple list items and introducing a search bar that looks through every monster in order to find the specific prompt. (ZTM cource)",
      link: "https://gigi-codeace.github.io/monsters-rolodex/",
      repo: "https://github.com/GIGI-CodeAce/monsters-rolodex",
      mobile: true
    },
  ]
}