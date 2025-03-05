// Sample data for games
const games = [
  {
    title: "2048",
    description: "An exciting adventure game.",
    image: "./games/2048/meta/apple-touch-icon.png",
    link: "./games/2048/index.html"
  },
  {
    title: "a dance of fire and ice",
    description: "An exciting adventure game.",
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1027880/e0d40fb4a7fd61ea921d69a61cfca36445894e82.jpg",
    link: "./games/a-dance-of-fire-and-ice/index.html"
  },
  {
    title: "a dark room",
    description: "An exciting adventure game.",
    image: "https://resource.supercheats.com/library/2017/1499871529adarkroomlogo2.jpg",
    link: "./games/a-dark-room/index.html"
  },
  {
    title: "Badlands",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/R.278ec24cc0943042ac6dc9cee678d948?rik=JtQKfKoUxeyHXQ&pid=ImgRaw&r=0",
    link: "./games/badlands/index.html"
  },
  {
    title: "ball dodge",
    description: "A game where you need to dodge a ball.",
    image: "https://img.playstationtrophies.org/images/2024/06/16/icon/1dafa3904b039136534e3739d526ee94-l.png",
    link: "./games/ball-dodge/index.html"
  },
  {
    title: "basketball stars",
    description: "An exciting adventure game.",
    image: "https://www.jimbelushi.ws/unblocked-games/wp-content/uploads/2023/02/Basketball-stars.webp",
    link: "./games/basketball-stars/index.html"
  },
  {
    title: "basket random",
    description: "An exciting adventure game.",
    image: "https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc",
    link: "./games/basket-random/index.html"
  },
  {
    title: "bike mania",
    description: "An exciting adventure game.",
    image: "https://images.sftcdn.net/images/t_app-icon-m/p/0c5f3788-9b65-11e6-839b-00163ed833e7/128483695/bike-mania-logo.png",
    link: "./games/bike-mania/index.html"
  },
  {
    title: "bitlife",
    description: "An exciting adventure game.",
    image: "./games/bitlife/logo.png",
    link: "./games/bitlife/index.html"
  },
  {
    title: "bloxorz",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.sSyioHxlQGyyQNEcbGt2tgHaHa?rs=1&pid=ImgDetMain",
    link: "./games/bloxorz/index.html"
  },
  {
    title: "boxing random",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP._0NoGOX_lW-arl4MkMEmUgAAAA?rs=1&pid=ImgDetMain",
    link: "./games/boxing-random/index.html"
  },
  {
    title: "breaklock",
    description: "An exciting adventure game.",
    image: "https://progressivewebapproom.com/img/breaklock-progressive-web-app.png",
    link: "./games/breaklock/index.html"
  },
  {
    title: "cat ninja",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.fWwOmT_Ly6BiQMQViPM9BQHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    link: "./games/cat-ninja/index.html"
  },
  {
    title: "chroma",
    description: "An exciting adventure game.",
    image: "https://www.bradgames.com/data/gameimages/5c7c99c76acf47ed92a647af8a8a2d6d-512x512.jpeg",
    link: "./games/chroma/index.html"
  },
  {
    title: "coloron",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.zmWL2FjHOp6tJ5ObmYzF3AHaHa?rs=1&pid=ImgDetMain",
    link: "./games/coloron/index.html"
  },
  {
    title: "cookie clicker",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/R.4d2a03a46209b62505d712cca641087e?rik=wSL88YHcQKaGWA&pid=ImgRaw&r=0",
    link: "./games/cookie-clicker/index.html"
  },
  {
    title: "core ball",
    description: "An exciting adventure game.",
    image: "https://games-site.github.io/projects/core-ball/pr_source.png",
    link: "./games/core-ball/index.html"
  },
  {
    title: "crossy road",
    description: "An exciting adventure game.",
    image: "./games/crossy-road/crossyroad.png",
    link: "./games/crossy-road/index.html"
  },
  {
    title: "cubefield",
    description: "An exciting adventure game.",
    image: "https://geometry-dash.co/data/image/game/cubefield-logo.jpg",
    link: "./games/cubefield/index.html"
  },
  {
    title: "dadish",
    description: "An exciting adventure game.",
    image: "https://play-lh.googleusercontent.com/sWNioomVkMh-v5LmKE6PXk4-mfiLl_Wv83C9Q2VzZnzSBmME9OFXLEm_HW2aSvLRxLE",
    link: "./games/dadish/index.html"
  },
  {
    title: "dinogame",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.j4DwfTPDJ_DUPpNmNwaObAHaHa?rs=1&pid=ImgDetMain",
    link: "./games/dinogame/index.html"
  },
  {
    title: "doodle jump",
    description: "An exciting adventure game.",
    image: "https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg",
    link: "./games/doodle-jump/index.html"
  },
  {
    title: "drift boss",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.EU4R2gVytUkMs5KuBotfZwAAAA?rs=1&pid=ImgDetMain",
    link: "./games/drift-boss/index.html"
  },
  {
    title: "fruit ninja",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.HfIKvEXVPqv87_D8kRNwcgHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
    link: "./games/fruit-ninja/index.html"
  },
  {
    title: "gameoflife",
    description: "An exciting adventure game.",
    image: "https://clipground.com/images/game-of-life-logo-1.gif",
    link: "./games/gameoflife/index.html"
  },
  {
    title: "geometry dash",
    description: "An exciting adventure game.",
    image: "https://vignette.wikia.nocookie.net/logopedia/images/6/61/Geometry_Dash_Logo.png/revision/latest?cb=20160726224148",
    link: "./games/geometry-dash/index.html"
  },
  {
    title: "jetpack joyride",
    description: "An exciting adventure game.",
    image: "https://assets1.ignimgs.com/2019/01/09/jetpack-joyride---button-1546993618462.jpg",
    link: "./games/jetpack-joyride/index.html"
  },
  {
    title: "moto x3m",
    description: "An exciting adventure game.",
    image: "https://kiz10.com/upload/thumbnails/1441370015_moto-x3m.jpg",
    link: "./games/moto-x3m/index.html"
  },
  {
    title: "ovo",
    description: "An exciting adventure game.",
    image: "https://izigames.net/uploads/2023/7/ovo-2.png",
    link: "./games/ovo/index.html"
  },
  {
    title: "retro bowl",
    description: "An exciting adventure game.",
    image: "https://retrobowl25.com/cache/data/image/game/retro-bowl-m300x300.png",
    link: "./games/retro-bowl/index.html"
  },
  {
    title: "rooftop snipers",
    description: "An exciting adventure game.",
    image: "https://img.gamedistribution.com/c3a70ae98547407a92ebedca8b79fdfa-512x512.jpeg",
    link: "./games/rooftop-snipers/index.html"
  },
  {
    title: "run 3",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.OVPXp1B1HybxPxHWZb2WdgAAAA?w=178&h=180&c=7&r=0&o=5&pid=1.7",
    link: "./games/run-3/index.html"
  },
  {
    title: "slope",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.G8FemuLi4HziChRQcGnFsgAAAA?rs=1&pid=ImgDetMain",
    link: "./games/slope/index.html"
  },
  {
    title: "soccer random",
    description: "An exciting adventure game.",
    image: "https://soccerrandom.co/wp-content/uploads/sites/21/2024/01/cropped-socccer-random.webp",
    link: "./games/soccer-random/index.html"
  },
  {
    title: "subway surfers",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.q3xLJIK5O0HU7000HDpnUwHaHa?rs=1&pid=ImgDetMain",
    link: "./games/subway-surfers/index.html"
  },
  {
    title: "swing monkey",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.IRgSkfh9q3m9DCfjT0jJbAHaHa?w=147&h=180&c=7&r=0&o=5&pid=1.7",
    link: "./games/swing-monkey/index.html"
  },
  {
    title: "temple run 2",
    description: "An exciting adventure game.",
    image: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-265906-52.jpg",
    link: "./games/temple-run-2/index.html"
  },
  {
    title: "tetris",
    description: "An exciting adventure game.",
    image: "https://play-lh.googleusercontent.com/7Zn2QBzByBf4XyQPhuRVsOkSaKSYsty1ka-6_bh6Ub-2kQri6xqqRdK52qxEM69N6cw",
    link: "./games/tetris/index.html"
  },
  {
    title: "there is no game",
    description: "An exciting adventure game.",
    image: "https://i0.wp.com/gudplay.uk/wp-content/uploads/2022/04/512.png?fit=512%2C512&ssl=1",
    link: "./games/swing-monkey/index.html"
  },
  {
    title: "tiny fishing",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.sjgS4L4BhnsBFUVpSbs8VAHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7",
    link: "./games/tiny-fishing/index.html"
  },
  {
    title: "vex 5",
    description: "An exciting adventure game.",
    image: "https://th.bing.com/th/id/OIP.4Rn4xGVpYjOR6_Y1v4TGugHaHa?rs=1&pid=ImgDetMain",
    link: "./games/vex-5/index.html"
  },
  {
    title: "wordle",
    description: "An exciting adventure game.",
    image: "https://cookieclicker.one/upload/cache/upload/imgs/game/wordle-m211x211.png",
    link: "./games/wordle/index.html"
  },
  {
    title: "worlds hardest game",
    description: "An exciting adventure game.",
    image: "https://faf-games.github.io/assets/img/worldshardestgame/worlds-hardest-game-3.logo.png",
    link: "./games/worlds-hardest-game/index.html"
  },

  {
    title: "Minecraft 1.2.5",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.2.5 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.2.6",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.2.6 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.3.1",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.3.1 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.5.2",
    description: "A fast-paced racing game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.5.2 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.8.8 (wasm)",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.8.8 Eaglercraft (wasm-gc).html"
  },
  {
    title: "Minecraft 1.8.8",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.8.8 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.9.4",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.9.4 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.11",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.11 Eaglercraft.html"
  },
  {
    title: "Minecraft 1.12.2 (alpha)",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.12.2 Eaglercraft (alpha).html"
  },
  {
    title: "Minecraft 1.12.2 (beta)",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.12.2 Eaglercraft (beta).html"
  },
  {
    title: "Minecraft 1.20 (incomplete)",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/1.20 Eaglercraft (Incomplete).html"
  },
  {
    title: "Minecraft Indev",
    description: "An exciting adventure game.",
    image: "https://media.forgecdn.net/avatars/214/575/636993229546679266.png",
    link: "./games/indev Eaglercraft.html"
  },
  

];

// Function to create a game card
function createGameCard(game) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = game.image;
  image.alt = game.title;

  const title = document.createElement("h3");
  title.textContent = game.title;

  const description = document.createElement("p");
  description.textContent = game.description;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);

  // Redirect to the game link when clicked
  card.addEventListener("click", () => {
    window.location.href = game.link;
  });

  return card;
}

// Function to render all game cards
function renderGames(filteredGames = games) {
  const gamesContainer = document.getElementById("games-container");
  gamesContainer.innerHTML = ""; // Clear existing cards
  filteredGames.forEach(game => {
    const card = createGameCard(game);
    gamesContainer.appendChild(card);
  });
}

// Function to filter games based on search input
function filterGames() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchInput));
  renderGames(filteredGames);
}

// Render games when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderGames();

  // Add event listener for search bar
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", filterGames);
});