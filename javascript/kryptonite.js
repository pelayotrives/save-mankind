class Kryptonite {
    constructor(xParam, yParam, sParam) {
    // Propiedades de la kriptonita.
    this.kryptoniteX = xParam; // Posición del eje de X de la kriptonita.
    this.kryptoniteY = yParam; // Posición del eje de Y de la kriptonita.
    this.kryptoniteW = 60; // Width de la kriptonita.
    this.kryptoniteH = 50; // Height de la kriptonita.
    this.kryptoniteSpeed = sParam; // Velocidad de la kriptonita.
    this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
    this.image.src = "./images/kryptonita.png"; // Le damos lugar de acceso.
  }

  drawKryptonite = () => {
    context.drawImage(this.image, this.kryptoniteX, this.kryptoniteY, this.kryptoniteW, this.kryptoniteH);
  };

  moveKryptonite = () => {
    this.kryptoniteX = this.kryptoniteX - this.kryptoniteSpeed;
  }
}