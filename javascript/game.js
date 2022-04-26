class Game {
  constructor() {
    this.background = new Image(); // Creamos el objeto que contendrá nuestra imagen de fondo.
    this.background.src = "./images/fondo.png"; // Le damos lugar de acceso.

    this.hero = new Hero();

    this.asteroidArray = [ new Asteroid(canvas.width * 1.1, Math.random() * 737) ]; // * Necesitamos un array, ya no podemos hacer un this.asteroid = new Asteroid(); -----> Los parámetros de entrada vienen dados en que en el constructor de asteroid.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array asteroid.
    this.miniAsteroidArray = [ new Miniasteroid(canvas.width, Math.random() * 775) ]; // * Necesitamos un array, ya no podemos hacer un this.miniAsteroid = new MiniAsteroid(); -----> Los parámetros de entrada vienen dados en que en el constructor de miniasteroid.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array miniasteroid.
    this.lifeArray = [ new Life(canvas.width * 5, Math.random() * 765) ]; // * Necesitamos un array, ya no podemos hacer un this.life = new Life(); -----> Los parámetros de entrada vienen dados en que en el constructor de life.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array life.
    this.pointsArray = [ new Points(canvas.width * 2, Math.random() * 760) ]; // * Necesitamos un array, ya no podemos hacer un this.points = new Points(); -----> Los parámetros de entrada vienen dados en que en el constructor de points.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array points.
    this.ufoArray = [ new Ufo(canvas.width * 1.2, Math.random() * 764) ]; // * Necesitamos un array, ya no podemos hacer un this.ufo = new Ufo(); -----> Los parámetros de entrada vienen dados en que en el constructor de ufo.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array ufo.
    
    this.gameOn = true;
  }

  // *! - Métodos de adición al array y comparativa con el último elemento.

  addAsteroids = () => {
    if (this.asteroidArray[this.asteroidArray.length - 1].asteroidX < 400) {
      let newAsteroid = new Asteroid(canvas.width, Math.random() * 737);
      this.asteroidArray.push(newAsteroid);
    }

    // Otro método para hacer lo mismo:
    // setInterval( () => {
    //   let newAsteroid = new Asteroid();
    //   this.asteroidArray.push(newAsteroid);
    // }, 2000);
  }

  addMiniAsteroids = () => {
    if (this.miniAsteroidArray[this.miniAsteroidArray.length - 1].miniAsteroidX < 750) {
      let newMiniAsteroid = new Miniasteroid(900, Math.random() * 775);
      this.miniAsteroidArray.push(newMiniAsteroid);
    }
  }

  addLife = () => {
    if (this.lifeArray[this.lifeArray.length - 1].lifeX < -4200) {
      let newLife = new Life(4600, Math.random() * 765);
      this.lifeArray.push(newLife);
    }
  }

  addPoints = () => {
    if (this.pointsArray[this.pointsArray.length - 1].pointsX < -800) {
      let newPoints = new Points(2500, Math.random() * 760);
      this.pointsArray.push(newPoints);
    }
  }

  addUfos = () => {
    if (this.ufoArray[this.ufoArray.length - 1].ufoX < -100) {
      let newUfo = new Ufo(1200, Math.random() * 764);
      this.ufoArray.push(newUfo);
    }
  }

  // *! - Métodos de comparativa de colisión.

  heroAsteroidCollision = () => {
    this.asteroidArray.forEach( (eachAsteroidArr, index) => {
      if (this.hero.heroX < eachAsteroidArr.asteroidX + eachAsteroidArr.asteroidW &&
        this.hero.heroX + this.hero.heroW > eachAsteroidArr.asteroidX &&
        this.hero.heroY < eachAsteroidArr.asteroidY + eachAsteroidArr.asteroidH &&
        this.hero.heroH + this.hero.heroY > eachAsteroidArr.asteroidY) {
          console.log("Colision con asteroide.");
          this.asteroidArray.splice[index, 1];
      }
    });
    //? console.log(this.asteroidArray)
  }

  heroMiniAsteroidCollision = () => {
    this.miniAsteroidArray.forEach( (eachMiniAsteroidArr, index) => {
      if (this.hero.heroX < eachMiniAsteroidArr.miniAsteroidX + eachMiniAsteroidArr.miniAsteroidW &&
        this.hero.heroX + this.hero.heroW > eachMiniAsteroidArr.miniAsteroidX &&
        this.hero.heroY < eachMiniAsteroidArr.miniAsteroidY + eachMiniAsteroidArr.miniAsteroidH &&
        this.hero.heroH + this.hero.heroY > eachMiniAsteroidArr.miniAsteroidY) {
          console.log("Colision con mini-asteroide.");
          this.miniAsteroidArray.splice[index, 1];

      }
    });
  }

  heroUfoCollision = () => {
    this.ufoArray.forEach( (eachUfoArr, index) => {
      if (this.hero.heroX < eachUfoArr.ufoX + eachUfoArr.ufoW &&
        this.hero.heroX + this.hero.heroW > eachUfoArr.ufoX &&
        this.hero.heroY < eachUfoArr.ufoY + eachUfoArr.ufoH &&
        this.hero.heroH + this.hero.heroY > eachUfoArr.ufoY) {
          console.log("Colision con OVNI.");
          this.ufoArray.splice[index, 1];
      }
    });
  }

  heroLifeCollision = () => {
    this.lifeArray.forEach( (eachLifeArr, index) => {
      if (this.hero.heroX < eachLifeArr.lifeX + eachLifeArr.lifeW &&
        this.hero.heroX + this.hero.heroW > eachLifeArr.lifeX &&
        this.hero.heroY < eachLifeArr.lifeY + eachLifeArr.lifeH &&
        this.hero.heroH + this.hero.heroY > eachLifeArr.lifeY) {
          console.log("Colision con vida.");
          this.lifeArray.splice[index, 1];
      }
    });
  }

  heroPointsCollision = () => {
    this.pointsArray.forEach( (eachPointsArr, index) => {
      if (this.hero.heroX < eachPointsArr.pointsX + eachPointsArr.pointsW &&
        this.hero.heroX + this.hero.heroW > eachPointsArr.pointsX &&
        this.hero.heroY < eachPointsArr.pointsY + eachPointsArr.pointsH &&
        this.hero.heroH + this.hero.heroY > eachPointsArr.pointsY) {
          console.log("Colision con puntos.");
          this.pointsArray.splice[index, 1];
      }
    });
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

    this.heroAsteroidCollision();
    this.heroMiniAsteroidCollision();
    this.heroUfoCollision();
    this.heroLifeCollision();
    this.heroPointsCollision();
    
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
