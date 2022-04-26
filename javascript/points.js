class Points {
    constructor(xParam, yParam) {
      // Propiedades de vida.
      this.pointsX = xParam; // Posición del eje de X de vida.
      this.pointsY = yParam; // Posición del eje de Y de vida.
      this.pointsW = 40; // Width de vida.
      this.pointsH = 40; // Height de vida.
      this.pointsSpeed = 2; // Velocidad de vida.
      this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
      this.image.src = "./images/puntos.png"; // Le damos lugar de acceso.
    }
  
    drawPoints = () => {
      context.drawImage(this.image, this.pointsX, this.pointsY, this.pointsW, this.pointsH);
    };
  
    movePoints = () => {
      this.pointsX = this.pointsX - this.pointsSpeed;
    }
  
  }