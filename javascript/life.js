class Life {
    constructor() {
      // Propiedades de vida.
      this.lifeX = canvas.width; // Posición del eje de X de vida.
      this.lifeY = 205; // Posición del eje de Y de vida.
      this.lifeW = 40; // Width de vida.
      this.lifeH = 34; // Height de vida.
      this.lifeSpeed = 2.5; // Velocidad de vida.
      this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
      this.image.src = "./images/vida.png"; // Le damos lugar de acceso.
    }
  
    drawLife = () => {
      context.drawImage(this.image, this.lifeX, this.lifeY, this.lifeW, this.lifeH);
    };
  
    moveLife = () => {
      this.lifeX = this.lifeX - this.lifeSpeed;
    }
  
  }