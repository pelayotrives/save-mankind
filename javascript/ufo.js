class Ufo {
  constructor() {
    // Propiedades del meteorito.
    this.ufoX = 700; // Posición del eje de X del meteorito.
    this.ufoY = 620; // Posición del eje de Y del meteorito.
    this.ufoW = 150; // Width del meteorito.
    this.ufoH = 36; // Height del meteorito.
    this.ufoSpeed = 1.5; // Velocidad del meteorito.
    this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
    this.image.src = "./images/ovni.png"; // Le damos lugar de acceso.
  }

  drawUfo = () => {
    context.drawImage(this.image, this.ufoX, this.ufoY, this.ufoW, this.ufoH);
  };

  moveUfo = () => {
    this.ufoX = this.ufoX - this.ufoSpeed;
  };
}
