function urlImg(root, name) {
  return `https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/${root}/${name}.png`;
}

export function MyProjectsData() {
    return [
      {
        id: 1,
        img: "https://mfkjjxderhqbsfsmtzql.supabase.co/storage/v1/object/public/miscellaneous//diamond.png",
        title: "GIGIbuy",
        desc: "An online clothing shop showcasing items like jackets, vests, etc. While purchases and deliveries are unavailable, the website is a sleek, responsive showcase of trendy fashion. Reflects its commitment to individuality and style." ,
        simple: "Browse through an extensive collection of high-quality clothing and accessories. To keep you trendy and confident for every occasion" ,
        link: "https://gigibuy.com/",
        repo: "https://github.com/GIGI-CodeAce/GIGIBuy",
        mobile: true
      },
      {
        id: 2,
        img: urlImg('myProjectsImgs', 'memesRNG'),
        title: "MemesRNG",
        desc: "Memes RNG is a meme-filled game where random events and internet humor collide for unpredictable, have a gameplay experience and test out your luck with all of the big rarity's",
        simple: "A great memes random number generator luck based insipired by the huge series of RNG game's trend followed on roblox" ,
        link: "https://gigi-codeace.github.io/Memes-RNG/",
        repo: "https://github.com/GIGI-CodeAce/Memes-RNG",
        mobile: true
      },
      {
        id: 3,
        img: urlImg('myProjectsImgs', 'deathBall'),
        title: "DeathBall",
        desc: "Death Ball, a game that challenges you to navigate through dynamic obstacles, bouncing spheres, and difficulty variations. Test your reflexes and strategy as you strive to survive in this visually captivating adventure. How long can you endure the chaos and set your high score?",
        simple: "A 2D based game where your own reflexes say their words. Dodge between massive death circles making the use of your skills and ability's" ,
        link: "https://gigi-codeace.github.io/DeathBall/DBmenu",
        repo: "https://github.com/GIGI-CodeAce/DeathBall",
        mobile: false
      },
      {
        id: 4,
        img: urlImg('myProjectsImgs', 'YC-PG'),
        title: "YC&PG",
        desc: "YP&CG, your go-to website for the power of customization in code creation! Imagine a platform where you have the freedom to craft and tailor specific code patterns for your numerous needs and create as many as you need.",
        simple: "Your Passwords and Codes Generator is a program where you can set up a specific character code path and generate as many as you need" ,
        link: "https://gigi-codeace.github.io/YC-PG/CGmenu",
        repo: "https://github.com/GIGI-CodeAce/YC-PG",
        mobile: false
      },
      {
        id: 5,
        img: urlImg('myProjectsImgs', 'GigiDash'),
        title: "Gigi Dash",
        desc: "GIGI-DASH, the spike-jumping adventure that will test your reflexes and push your skills to the limit! Pushing through deadly spikes, high speeds and theme colored seasons.",
        simple: "A pretty basic game of infinitely jumping across deadly spikes similar to the T-rex game, geometry dash, etc.." ,
        link: "https://gigi-codeace.github.io/GIGI-DASH/GDmenu",
        repo: "https://github.com/GIGI-CodeAce/GIGI-DASH",
        mobile: false
      },
    ]
}

export function MoreProjectsData() {
  return [
    {
      id: 1,
      img: urlImg('courceProjectsImgs', 'memeMaker'),
      title: "Memes generator",
      desc: "Memes generator is an online meme creator where you could pick a random meme from up to top 100 most popular memes from the internet and be creative with your text inputs in order to make the one meme everyone from your friends group will love!",
      link: "https://gigi-codeace.github.io/Memes-generator/",
      repo: "https://github.com/GIGI-CodeAce/Memes-generator",
      mobile: true
    },
    {
      id: 2,
      img: urlImg('courceProjectsImgs', 'airbnb'),
      title: "Airbnb clone",
      desc: "Here is a standard Airbnb clone made from an older version of their website from following up a react.js cource.",
      link: "https://gigi-codeace.github.io/airbnb-clone/",
      repo: "https://github.com/GIGI-CodeAce/airbnb-clone",
      mobile: true
    },
    {
      id: 3,
      img: urlImg('myProjectsImgs', 'spotify'),
      title: "Spotify clone",
      desc: "A spotify album tracklist clone theme made w/ react,tailwind",
      link: "https://gigi-codeace.github.io/SpotifyApp-clone/",
      repo: "https://github.com/GIGI-CodeAce/SpotifyApp-clone",
      mobile: true
    },
  ]
}