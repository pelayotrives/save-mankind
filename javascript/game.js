class Game {
  constructor() {
    this.background = new Image(); // Creamos el objeto que contendrá nuestra imagen de fondo.
    this.background.src = "./images/fondo.png"; // Le damos lugar de acceso.
  }

  // Método gameLoop que ejecuta el juego una y otra vez.

  gameLoop = () => {
    // 1.) Borrar el canvas
    // console.log("Iniciando.");
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 2.) Acciones o movimientos de los elementos, como creaciones, saltos...

    // 3.) Dibujar los elementos
    context.drawImage(this.background, 0, 0, canvas.width, canvas.height); // Background lo hemos declarado en la propia clase, por lo que no hace falta ahondar en sus propiedades.
    // 4.) Control y recursión
    requestAnimationFrame(this.gameLoop);
  };
}
