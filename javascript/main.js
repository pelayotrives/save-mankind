// * Variables globales
// Necesitamos acceder a elementos de DOM, por eso deberemos crear las siguientes variables:

const startScreen = document.querySelector("#start-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const reStartButton = document.querySelector("#restart-button");
const scoresCanvas = document.querySelector("#scores-canvas");
const canvas = document.querySelector("#my-canvas");
const bottomCanvas = document.querySelector("#bottom-canvas");
const livesPoints = document.querySelector("#lives-score");
const modifyPoints = document.querySelector("#points-score");
const finalPoints = document.querySelector("#points-score-final"); 
const context = canvas.getContext("2d"); 

let game; // Variable global para ser posible su acceso desde el scope global.
let music = new Sounds();

// * Funciones de mantenimiento de estados

reStartButton.style.display = "none"; // Estado inicial - Botón (restart): ocultamos.
gameOverScreen.style.display = "none"; // Estado inicial - Pantalla (game over): ocultamos.
backButton.style.display = "none"; // Estado inicial - Botón (back): ocultamos.
scoresCanvas.style.display = "none"; // Estado inicial - Pantalla (scores): ocultamos.
canvas.style.display = "none"; // Estado inicial - Pantalla (canvas): ocultamos.

const endGame = () => {
  startScreen.style.display = "none"; // Pantalla (inicio): ocultamos.
  canvas.style.display = "none"; // Pantalla (canvas): mostramos.
  backButton.style.display = "none"; // Estado inicial - Botón (back): ocultamos.
  scoresCanvas.style.display = "none"; // Estado inicial - Pantalla (scores): ocultamos.
  bottomCanvas.style.display = "none"; // Estado inicial - Pantalla (scores): ocultamos.
  gameOverScreen.style.display = "flex"; // Pantalla (game over): mostramos.
  reStartButton.style.display = "flex"; // Estado inicial - Botón (restart): mostramos.
  music.backgroundMusic.pause();
  music.backgroundMusic.currentTime = 0;

}

const reloadGame = () => {
  music.clickSound();
  startScreen.style.display = "block";
  canvas.style.display = "none";
  gameOverScreen.style.display = "none";
  reStartButton.style.display = "none";
  scoresCanvas.style.display = "none"; // Pantalla (scores): mostramos.
  backButton.style.display = "none"; // Botón (back): mostramos.
  music.backgroundMusic.pause();
  music.backgroundMusic.currentTime = 0;
  music.mainMenuMusic.pause();
  music.menuMusic();
  music.mainMenuMusic.currentTime = 0;
  game = new Game();
  game.gameLoop();
}

const startGame = () => {
  startScreen.style.display = "none"; // Pantalla (inicio): ocultamos.
  canvas.style.display = "block"; // Pantalla (canvas): mostramos.
  scoresCanvas.style.display = "flex"; // Pantalla (scores): mostramos.
  backButton.style.display = "flex"; // Botón (back): mostramos.
  bottomCanvas.style.display = "flex";
  gameOverScreen.style.display = "none";

  music.mainMusic();
  music.clickSound();
  

  // Empezamos nuestro juego.
  // Nuestro juego al completo será una sola clase.
  // Crearemos, por tanto, un nuevo objeto de la clase Game.

  game = new Game();
  modifyPoints.innerHTML = game.contador;
  livesPoints.innerHTML = game.contadorVidas;
  game.gameLoop();
  // console.log(game);
};

const keyPressed = (event) => {
  if (event.code === "ArrowUp" && game.hero.heroY > game.hero.heroSpeed) {
    console.log(game.hero.heroY);
    game.hero.upHero();
  } else if (event.code === "ArrowDown" && game.hero.heroY < canvas.height - 70) {
    game.hero.downHero();
    console.log(game.hero.heroY);
  }
};

// * Añadir .addEventListeners

startButton.addEventListener("click", startGame);
reStartButton.addEventListener("click", startGame);
backButton.addEventListener("click", reloadGame);
window.addEventListener("keydown", keyPressed);
