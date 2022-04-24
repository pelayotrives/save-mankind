class Game {
  constructor() {
    this.background = new Image(); // Creamos el objeto que contendrá nuestra imagen de fondo.
    this.background.src = "./images/fondo.png"; // Le damos lugar de acceso.
    this.hero = new Hero();
    this.asteroid = new Asteroid();
    this.miniAsteroid = new Miniasteroid();
    this.life = new Life();
    this.points = new Points();
    this.ufo = new Ufo();
  }

  // Método gameLoop que ejecuta el juego una y otra vez.
 
  gameLoop = () => {
    // 1.) Borrar el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 2.) Acciones o movimientos de los elementos, como creaciones, saltos...

    console.log(this.hero);
    this.hero.heroFriction();
    this.miniAsteroid.moveMiniAsteroid();
    this.asteroid.moveAsteroid();
    this.life.moveLife();
    this.points.movePoints();
    this.ufo.moveUfo();

    // 3.) Dibujar los elementos
    
    context.drawImage(this.background, 0, 0, canvas.width, canvas.height); // Background lo hemos declarado en la propia clase, por lo que no hace falta ahondar en sus propiedades.
    this.hero.drawHero();
    this.asteroid.drawAsteroid();
    this.miniAsteroid.drawMiniAsteroid();
    this.life.drawLife();
    this.points.drawPoints();
    this.ufo.drawUfo();


    // 4.) Control y recursión
    requestAnimationFrame(this.gameLoop);
  };
}
