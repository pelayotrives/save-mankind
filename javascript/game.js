class Game {
  constructor() {
    this.background = new Image(); // Creamos el objeto que contendrá nuestra imagen de fondo.
    this.background.src = "./images/fondo.png"; // Le damos lugar de acceso.

    this.hero = new Hero();
    this.sound = new Sounds();

    this.asteroidArray = [ new Asteroid() ]; // Necesitamos un array, ya no podemos hacer un this.asteroid = new Asteroid();
    this.miniAsteroidArray = [ new Miniasteroid() ]; // Necesitamos un array, ya no podemos hacer un this.miniAsteroid = new MiniAsteroid();
    this.lifeArray = [ new Life() ]; // Necesitamos un array, ya no podemos hacer un this.life = new Life();
    this.pointsArray = [ new Points() ]; // Necesitamos un array, ya no podemos hacer un this.points = new Points();
    this.ufoArray = [ new Ufo() ]; // Necesitamos un array, ya no podemos hacer un this.ufo = new Ufo();
    
    this.gameOn = true;
  }

  addAsteroids = () => {
    if (this.asteroidArray[this.asteroidArray.length - 1].asteroidX < 350) {
      let newAsteroid = new Asteroid();
      this.asteroidArray.push(newAsteroid);
    }
  }

  addMiniAsteroids = () => {
    if (this.miniAsteroidArray[this.miniAsteroidArray.length - 1].miniAsteroidX < 350) {
      let newMiniAsteroid = new Miniasteroid();
      this.miniAsteroidArray.push(newMiniAsteroid);
    }
  }

  addLife = () => {
    if (this.lifeArray[this.lifeArray.length - 1].lifeX < 350) {
      let newLife = new Life();
      this.lifeArray.push(newLife);
    }
  }

  addPoints = () => {
    if (this.pointsArray[this.pointsArray.length - 1].pointsX < 350) {
      let newPoints = new Points();
      this.pointsArray.push(newPoints);
    }
  }

  addUfos = () => {
    if (this.ufoArray[this.ufoArray.length - 1].ufoX < 350) {
      let newUfo = new Ufo();
      this.ufoArray.push(newUfo);
    }
  }

  // Método gameLoop que ejecuta el juego una y otra vez.
 
  gameLoop = () => {

    // *! ---------------------------------------------------
    
    // 1.) Borrar el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // *! ---------------------------------------------------

    // 2.) Acciones o movimientos de los elementos, como creaciones, saltos...
    this.hero.heroFriction();

    this.addAsteroids(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addMiniAsteroids(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addLife(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addPoints() // * Invocamos al método para ir añadiendo elementos al array.
    this.addUfos(); // * Invocamos al método para ir añadiendo elementos al array.

    // * Antes de ser un array, cada objeto individual era: this.miniAsteroid.moveMiniAsteroid();
    this.asteroidArray.forEach( (eachAsteroid) => {
      eachAsteroid.moveAsteroid();
    });

    // * Antes de ser un array, cada objeto individual era: this.asteroid.moveAsteroid();
    this.miniAsteroidArray.forEach( (eachMiniAsteroid) => {
      eachMiniAsteroid.moveMiniAsteroid();
    });

    // * Antes de ser un array, cada objeto individual era: this.life.moveLife();
    this.lifeArray.forEach( (eachLife) => {
      eachLife.moveLife();
    });

    // * Antes de ser un array, cada objeto individual era: this.points.movePoints();
    this.pointsArray.forEach( (eachPoints) => {
      eachPoints.movePoints();
    });

    // * Antes de ser un array, cada objeto individual era: this.ufo.moveUfo();
    this.ufoArray.forEach( (eachUfo) => {
      eachUfo.moveUfo();
    });

    // *! ---------------------------------------------------

    // 3.) Dibujar los elementos
    
    context.drawImage(this.background, 0, 0, canvas.width, canvas.height); // Background lo hemos declarado en la propia clase, por lo que no hace falta ahondar en sus propiedades.
    this.hero.drawHero();

    // * Ya no podemos hacer esto: this.asteroid.drawAsteroid(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.asteroidArray.forEach( (eachAsteroid) => {
      eachAsteroid.drawAsteroid();
    });

    // * Ya no podemos hacer esto: this.miniAsteroid.drawMiniAsteroid(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.miniAsteroidArray.forEach( (eachMiniAsteroid) => {
      eachMiniAsteroid.drawMiniAsteroid();
    });

    // * Ya no podemos hacer esto: this.life.drawLife(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.lifeArray.forEach( (eachLife) => {
      eachLife.drawLife();
    });

    // * Ya no podemos hacer esto: this.points.drawPoints(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.pointsArray.forEach( (eachPoints) => {
      eachPoints.drawPoints();
    });

    // * Ya no podemos hacer esto: this.ufo.drawUfo(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.ufoArray.forEach( (eachUfo) => {
      eachUfo.drawUfo();
    });

    // *! ---------------------------------------------------

    // 4.) Control y recursión
    if (this.gameOn) {
      requestAnimationFrame(this.gameLoop);
    } 
    
  };
}
