// * Variables globales
// Necesitamos acceder a elementos de DOM, por eso deberemos crear las siguientes variables:

const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const reStartButton = document.querySelector("#restart-button");
const canvas = document.querySelector("#my-canvas");
const context = canvas.getContext("2d");
let game; // Declara una variable game, que será de utilidad más tarde a la hora de crear un objeto nuevo game.

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

  game = new Game(); // Crea un nuevo objeto "game" basado en la clase "Game". Esto se asigna a la variable global "game" declarada en la línea 8 de "main.js".
  game.gameLoop(); // Dentro de nuestro objeto "game", estamos accediendo al método gameLoop, definido dentro de la clase "Game", por lo cual, lo contiene.
};

// * Añadir .addEventListeners

startButton.addEventListener("click", startGame);
