// * Variables globales
// Necesitamos acceder a elementos de DOM, por eso deberemos crear las siguientes variables:

const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const reStartButton = document.querySelector("#restart-button");
const canvas = document.querySelector("#my-canvas");
const context = canvas.getContext("2d");

// * Funciones de mantenimiento de estados

reStartButton.style.display = "none";
backButton.style.display = "none";
canvas.style.display = "none";

const startGame = () => {
  startScreen.style.display = "none"; // Ocultamos al completo el conjunto de la pantalla de inicio.
  canvas.style.display = "block"; // Canvas originalmente es tipo bloque, así que para hacerlo visible pondremos esto en vez de cualquier otra cosa. Toma el tamaño máximo de la pantalla.
  backButton.style.display = "flex";

  // Empezamos nuestro juego.
  // Nuestro juego al completo será una sola clase.
  // Crearemos, por tanto, un nuevo objeto de la clase Game.
  let game = new Game();
  game.gameLoop();
};

// * Añadir .addEventListeners

startButton.addEventListener("click", startGame);
