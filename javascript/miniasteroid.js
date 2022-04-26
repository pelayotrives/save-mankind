class Miniasteroid {
    constructor(xParam, yParam) {
      // Propiedades del meteorito.
      this.miniAsteroidX = xParam; // Posición del eje de X del meteorito.
      this.miniAsteroidY = yParam; // Posición del eje de Y del meteorito.
      this.miniAsteroidW = 20; // Width del meteorito.
      this.miniAsteroidH = 25; // Height del meteorito.
      this.miniAsteroidSpeed = 1; // Velocidad del meteorito.
      this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
      this.image.src = "./images/minimeteorito.png"; // Le damos lugar de acceso.
    }
  
    drawMiniAsteroid = () => {
      context.drawImage(this.image, this.miniAsteroidX, this.miniAsteroidY, this.miniAsteroidW, this.miniAsteroidH);
    };
  
    moveMiniAsteroid = () => {
      this.miniAsteroidX = this.miniAsteroidX - this.miniAsteroidSpeed;
    }
  
  }
  