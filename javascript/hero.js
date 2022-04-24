class Hero {
  constructor() {
    // Propiedades del héroe
    this.heroX = 20; // Posición del eje de X del héroe.
    this.heroY = 400; // Posición del eje de Y del héroe.
    this.heroW = 196; // Width del héroe.
    this.heroH = 63; // Height del héroe.
    this.heroPresure = 0.5; // Presión gravitacional del héroe.
    this.heroSpeed = 30; // Velocidad del héroe.
    this.image = new Image(); // Creamos el objeto que contendrá nuestra imagen.
    this.image.src = "./images/heroe.png"; // Le damos lugar de acceso.
  }

  // Métodos del héroe
  drawHero = () => {
    context.drawImage(this.image, this.heroX, this.heroY - this.heroH, this.heroW, this.heroH);
  };

  heroFriction = () => {
    if (this.heroY >= canvas.height / 2) {
      this.heroY = this.heroY + this.heroPresure;
    } else if (this.heroY < canvas.height / 2) {
      this.heroY = this.heroY - this.heroPresure;
    }
  };

  upHero = () => {
    this.heroY = this.heroY - this.heroSpeed;
  };

  downHero = () => {
    this.heroY = this.heroY + this.heroSpeed;
  };
}
