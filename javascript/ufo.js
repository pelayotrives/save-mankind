class Ufo {
  constructor(xParam, yParam, sParam) {
    // Propiedades del meteorito.
    this.ufoX = xParam; // Posición del eje de X del meteorito.
    this.ufoY = yParam; // Posición del eje de Y del meteorito.
    this.ufoW = 150; // Width del meteorito.
    this.ufoH = 36; // Height del meteorito.
    this.ufoSpeed = sParam; // Velocidad del meteorito.
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
