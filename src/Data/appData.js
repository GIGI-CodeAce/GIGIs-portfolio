
function urlImg(name) {
  return `https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/${name}.png`;
}

function AppData() {
    return [
      {
        id: 1,
        img: urlImg('memesRNG'),
        title: "memesRNG",
        desc: "A chaotic, meme-filled game where random events and internet humor collide for unpredictable, hilarious gameplay experiences",
        link: "https://gigi-codeace.github.io/Memes-RNG/"
      },
      {
        id: 2,
        img: urlImg('deathBall'),
        title: "deathBall",
        desc: "Death Ball, a game that challenges you to navigate through dynamic obstacles, bouncing spheres, and difficulty variations. Test your reflexes and strategy as you strive to survive in this visually captivating adventure. How long can you endure the chaos and set your high score?",
        link: "https://gigi-codeace.github.io/DeathBall/DBmenu"
      },
      {
        id: 3,
        img: urlImg('GigiDash'),
        title: "Gigi Dash",
        desc: " GIGI-DASH, the ultimate spike-jumping adventure that will test your reflexes and push your skills to the limit!",
        link: "https://gigi-codeace.github.io/GIGI-DASH/GDmenu"
      },
      {
        id: 4,
        img: urlImg('YC&PG'),
        title: "YC&PG",
        desc: " YP&CG, your go-to website for unleashing the power of customization in code creation! Imagine a platform where you have the freedom to meticulously craft and tailor specific code patterns for your promotional offers and redeemable items. YP&CG transforms coding into a personalized and seamless experience.",
        link: "https://gigi-codeace.github.io/YC-PG/CGmenu"
      },
    ]

    }

    export default AppData