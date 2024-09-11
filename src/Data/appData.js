function urlImg(root, name) {
  return `https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/${root}/${name}.png`;
}

export function MyProjectsData() {
    return [
      {
        id: 1,
        img: urlImg('myProjectsImgs', 'memesRNG'),
        title: "MemesRNG",
        desc: "A chaotic, meme-filled game where random events and internet humor collide for unpredictable, hilarious gameplay experiences",
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
        desc: "GIGI-DASH, the ultimate spike-jumping adventure that will test your reflexes and push your skills to the limit!",
        link: "https://gigi-codeace.github.io/GIGI-DASH/GDmenu",
        repo: "https://github.com/GIGI-CodeAce/GIGI-DASH",
        mobile: false
      },
      {
        id: 4,
        img: urlImg('myProjectsImgs', 'YC-PG'),
        title: "YC&PG",
        desc: "YP&CG, your go-to website for unleashing the power of customization in code creation! Imagine a platform where you have the freedom to meticulously craft and tailor specific code patterns for your promotional offers and redeemable items. YP&CG transforms coding into a personalized and seamless experience.",
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
      desc: "A chaotic, meme-filled game where random events and internet humor collide for unpredictable, hilarious gameplay experiences",
      link: "https://gigi-codeace.github.io/Memes-generator/",
      repo: "https://github.com/GIGI-CodeAce/Memes-generator",
      mobile: true
    },
    {
      id: 2,
      img: urlImg('courceProjectsImgs', 'airbnb'),
      title: "Airbnb clone",
      desc: "Death Ball, a game that challenges you to navigate through dynamic obstacles, bouncing spheres, and difficulty variations. Test your reflexes and strategy as you strive to survive in this visually captivating adventure. How long can you endure the chaos and set your high score?",
      link: "https://gigi-codeace.github.io/airbnb-clone/",
      repo: "https://github.com/GIGI-CodeAce/airbnb-clone",
      mobile: true
    },
    {
      id: 2,
      img: urlImg('courceProjectsImgs', 'react'),
      title: "React facts",
      desc: "Death Ball, a game that challenges you to navigate through dynamic obstacles, bouncing spheres, and difficulty variations. Test your reflexes and strategy as you strive to survive in this visually captivating adventure. How long can you endure the chaos and set your high score?",
      link: "https://gigi-codeace.github.io/React-facts/",
      repo: "https://github.com/GIGI-CodeAce/React-facts",
      mobile: true
    },
    {
      id: 4,
      img: urlImg('courceProjectsImgs', 'rolodex'),
      title: "Rolodex monsters",
      desc: "YP&CG, your go-to website for unleashing the power of customization in code creation! Imagine a platform where you have the freedom to meticulously craft and tailor specific code patterns for your promotional offers and redeemable items. YP&CG transforms coding into a personalized and seamless experience.",
      link: "https://gigi-codeace.github.io/monsters-rolodex/",
      repo: "https://github.com/GIGI-CodeAce/monsters-rolodex",
      mobile: true
    },
  ]
}