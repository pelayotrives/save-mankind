class Asteroid {
  constructor() {
    // Propiedades del meteorito.
    this.asteroidX = canvas.width; // Posición del eje de X del meteorito.
    this.asteroidY = 100; // Posición del eje de Y del meteorito.
    this.asteroidW = 75; // Width del meteorito.
    this.asteroidH = 63; // Height del meteorito.
    this.asteroidSpeed = 1; // Velocidad del meteorito.
    this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
    this.image.src = "./images/meteorito.png"; // Le damos lugar de acceso.
  }

  drawAsteroid = () => {
    context.drawImage(this.image, this.asteroidX, this.asteroidY, this.asteroidW, this.asteroidH);
  };

  moveAsteroid = () => {
    this.asteroidX = this.asteroidX - this.asteroidSpeed;
  }

}
