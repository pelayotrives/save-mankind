class Asteroid {
  constructor() {
    // Propiedades del meteorito.
    this.asteroidX = 20; // Posición del eje de X del meteorito.
    this.asteroidY = 400; // Posición del eje de Y del meteorito.
    this.asteroidW = 95; // Width del meteorito.
    this.asteroidH = 83; // Height del meteorito.
    this.asteroidSpeed = 10; // Velocidad del meteorito.
    this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
    this.image.src = "./images/meteorito.png"; // Le damos lugar de acceso.
  }
}
