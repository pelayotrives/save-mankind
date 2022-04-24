// * Variables globales
// Necesitamos acceder a elementos de DOM, por eso deberemos crear las siguientes variables:

const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const reStartButton = document.querySelector("#restart-button");
const scoresCanvas = document.querySelector("#scores-canvas");
const canvas = document.querySelector("#my-canvas");
const context = canvas.getContext("2d");
let game; // Variable global para ser posible su acceso desde el scope global.

// * Funciones de mantenimiento de estados

reStartButton.style.display = "none"; // Estado inicial - Botón (restart): ocultamos.
backButton.style.display = "none"; // Estado inicial - Botón (back): ocultamos.
scoresCanvas.style.display = "none"; // Estado inicial - Pantalla (scores): ocultamos.
canvas.style.display = "none"; // Estado inicial - Pantalla (canvas): ocultamos.

const startGame = () => {
  startScreen.style.display = "none"; // Pantalla (inicio): ocultamos.
  canvas.style.display = "block"; // Pantalla (canvas): mostramos.
  scoresCanvas.style.display = "flex"; // Pantalla (scores): mostramos.
  backButton.style.display = "flex"; // Botón (back): mostramos.

  // Empezamos nuestro juego.
  // Nuestro juego al completo será una sola clase.
  // Crearemos, por tanto, un nuevo objeto de la clase Game.

  game = new Game();
  game.gameLoop();
  console.log(game);
};

const keyPressed = (event) => {
  if (event.code === "ArrowUp") {
    console.log("Up.");
    game.hero.upHero();
  } else if (event.code === "ArrowDown") {
    console.log("Down.");
    game.hero.downHero();
  }
};

// * Añadir .addEventListeners

startButton.addEventListener("click", startGame);
window.addEventListener("keydown", keyPressed);
