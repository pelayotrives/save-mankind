class Game {
  constructor() {
    this.background = new Image(); // * Creamos el objeto que contendrá nuestra imagen de fondo.
    this.background.src = "./images/fondo.png"; // * Le damos lugar de acceso.

    this.hero = new Hero(); // * Creamos un objeto de la clase Hero() para que introducirnos en sus métodos y parámetros y modificarlos nos sea más  fácil desde esta clase game.js.
    this.sound = new Sounds(); // * Creamos un objeto de la clase Sounds() para que introducirnos en sus métodos y parámetros y modificarlos nos sea más  fácil desde esta clase game.js.
    this.globalSpeed = 1; // * Con esta variable conseguimos

    this.asteroidArray = [ new Asteroid(canvas.width * 1.1, Math.random() * 737, this.globalSpeed) ]; // * Necesitamos un array, ya no podemos hacer un this.asteroid = new Asteroid(); -----> Los parámetros de entrada vienen dados en que en el constructor de asteroid.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array asteroid.
    this.miniAsteroidArray = [ new Miniasteroid(canvas.width, Math.random() * 775, this.globalSpeed) ]; // * Necesitamos un array, ya no podemos hacer un this.miniAsteroid = new MiniAsteroid(); -----> Los parámetros de entrada vienen dados en que en el constructor de miniasteroid.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array miniasteroid.
    this.lifeArray = [ new Life(canvas.width * 5, Math.random() * 765) ]; // * Necesitamos un array, ya no podemos hacer un this.life = new Life(); -----> Los parámetros de entrada vienen dados en que en el constructor de life.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array life.
    this.pointsArray = [ new Points(canvas.width * 2, Math.random() * 760) ]; // * Necesitamos un array, ya no podemos hacer un this.points = new Points(); -----> Los parámetros de entrada vienen dados en que en el constructor de points.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array points.
    this.ufoArray = [ new Ufo(canvas.width * 1.2, Math.random() * 764, this.globalSpeed) ]; // * Necesitamos un array, ya no podemos hacer un this.ufo = new Ufo(); -----> Los parámetros de entrada vienen dados en que en el constructor de ufo.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array ufo.
    this.kryptoniteArray = [ new Kryptonite(canvas.width * 1.75, Math.random() * 765, this.globalSpeed) ]; // * Necesitamos un array, ya no podemos hacer un this.kryptonite = new Kryptonite(); -----> Los parámetros de entrada vienen dados en que en el constructor de kryptonite.js, hemos definido dos parámetros de entrada para poder randomizar las posiciones de cada objeto de este array kryptonite.

    this.gameOn = true; // * Iniciamos esta global a true. Si cambia a false, el juego se detendrá.
    this.contador = 0; // * Contador para la suma de puntos que inicia a 0 para ser modificado durante el juego.
    this.contadorVidas = 3; // * Contador de vidas que inicia a 3. Si llega a 0, se acaba el juego.
    
  }

  // *! - Métodos de adición al array y comparativa con el último elemento.

  addAsteroids = () => {
    if ( (this.asteroidArray.length === 0) || this.asteroidArray[this.asteroidArray.length - 1].asteroidX < 400) {
      let newAsteroid = new Asteroid(canvas.width, Math.random() * 737, this.globalSpeed);
      this.asteroidArray.push(newAsteroid);
    }

    // Otro método para hacer lo mismo:
    // setInterval( () => {
    //   let newAsteroid = new Asteroid();
    //   this.asteroidArray.push(newAsteroid);
    // }, 2000);
  }

  addMiniAsteroids = () => {
    if ( (this.miniAsteroidArray.length === 0) || this.miniAsteroidArray[this.miniAsteroidArray.length - 1].miniAsteroidX < 750) { // * Tenemos que hacer comparativa. Si el array está vacío (porque se ha eliminado el elemento anterior al haber chocado el héroe, por lo que estará vacío) O si el anterior objeto está en la posición precisa para crear uno nuevo...
      let newMiniAsteroid = new Miniasteroid(900, Math.random() * 775, this.globalSpeed); // * Añadimos el nuevo objeto en la posición establecida...
      this.miniAsteroidArray.push(newMiniAsteroid); // * Y cargamos dicho objeto al array.
    }
  }

  addLife = () => {
    if ( (this.lifeArray.length === 0) || this.lifeArray[this.lifeArray.length - 1].lifeX < -4200) { // * Tenemos que hacer comparativa. Si el array está vacío (porque se ha eliminado el elemento anterior al haber chocado el héroe, por lo que estará vacío) O si el anterior objeto está en la posición precisa para crear uno nuevo...
      let newLife = new Life(4600, Math.random() * 765); // * Añadimos el nuevo objeto en la posición establecida...
      this.lifeArray.push(newLife); // * Y cargamos dicho objeto al array.
    }
  }

  addPoints = () => {
    if ( (this.pointsArray.length === 0) || (this.pointsArray[this.pointsArray.length - 1].pointsX < -800)) { // * Tenemos que hacer comparativa. Si el array está vacío (porque se ha eliminado el elemento anterior al haber chocado el héroe, por lo que estará vacío) O si el anterior objeto está en la posición precisa para crear uno nuevo...
      let newPoints = new Points(2500, Math.random() * 760); // * Añadimos el nuevo objeto en la posición establecida...
      this.pointsArray.push(newPoints); // * Y cargamos dicho objeto al array.
    }
  }

  addUfos = () => {
    if ( (this.ufoArray.length === 0) || (this.ufoArray[this.ufoArray.length - 1].ufoX < -100)) { // * Tenemos que hacer comparativa. Si el array está vacío (porque se ha eliminado el elemento anterior al haber chocado el héroe, por lo que estará vacío) O si el anterior objeto está en la posición precisa para crear uno nuevo...
      let newUfo = new Ufo(1200, Math.random() * 764, this.globalSpeed); // * Añadimos el nuevo objeto en la posición establecida...
      this.ufoArray.push(newUfo); // * Y cargamos dicho objeto al array.
    }
  }

  addKryptonite = () => {
    if ( (this.kryptoniteArray.length === 0) || (this.kryptoniteArray[this.kryptoniteArray.length - 1].kryptoniteX < -100)) { // * Tenemos que hacer comparativa. Si el array está vacío (porque se ha eliminado el elemento anterior al haber chocado el héroe, por lo que estará vacío) O si el anterior objeto está en la posición precisa para crear uno nuevo...
      let newKryptonite = new Kryptonite(2000, Math.random() * 765, this.globalSpeed); // * Añadimos el nuevo objeto en la posición establecida...
      this.kryptoniteArray.push(newKryptonite); // * Y cargamos dicho objeto al array.
    }
  }

  // *! - Métodos de comparativa de colisión.

  // ?    Basados en:

  // ?    if (rect1.x < rect2.x + rect2.width &&
  // ?    rect1.x + rect1.width > rect2.x &&
  // ?    rect1.y < rect2.y + rect2.height &&
  // ?    rect1.height + rect1.y > rect2.y) {}

  heroAsteroidCollision = () => {
    this.asteroidArray.forEach( (eachAsteroidArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachAsteroidArr.asteroidX + eachAsteroidArr.asteroidW &&
        this.hero.heroX + this.hero.heroW > eachAsteroidArr.asteroidX &&
        this.hero.heroY < eachAsteroidArr.asteroidY + eachAsteroidArr.asteroidH &&
        this.hero.heroH + this.hero.heroY > eachAsteroidArr.asteroidY) {
          console.log("Colision con asteroide.");
          this.sound.injuryHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.asteroidArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.
          // ! ------------------
          this.contadorVidas = this.contadorVidas - 2;
          livesPoints.innerHTML = this.contadorVidas;
          if ((livesPoints.innerHTML === "0") || (livesPoints.innerHTML < "0")) {
            this.gameOn = false;
            endGame();
          }
        }
    });
  }

  heroMiniAsteroidCollision = () => {
    this.miniAsteroidArray.forEach( (eachMiniAsteroidArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachMiniAsteroidArr.miniAsteroidX + eachMiniAsteroidArr.miniAsteroidW &&
        this.hero.heroX + this.hero.heroW > eachMiniAsteroidArr.miniAsteroidX &&
        this.hero.heroY < eachMiniAsteroidArr.miniAsteroidY + eachMiniAsteroidArr.miniAsteroidH &&
        this.hero.heroH + this.hero.heroY > eachMiniAsteroidArr.miniAsteroidY) {
          console.log("Colision con mini-asteroide.");
          this.sound.injuryHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.miniAsteroidArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.
          // ! ------------------
          this.contadorVidas = this.contadorVidas - 1;
          livesPoints.innerHTML = this.contadorVidas;
          if ((livesPoints.innerHTML === "0") || (livesPoints.innerHTML < "0")) {
            this.gameOn = false;
            endGame();
          }
      }
    });
  }

  heroUfoCollision = () => {
    this.ufoArray.forEach( (eachUfoArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachUfoArr.ufoX + eachUfoArr.ufoW &&
        this.hero.heroX + this.hero.heroW > eachUfoArr.ufoX &&
        this.hero.heroY < eachUfoArr.ufoY + eachUfoArr.ufoH &&
        this.hero.heroH + this.hero.heroY > eachUfoArr.ufoY) {
          console.log("Colision con OVNI.");
          this.sound.injuryHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.ufoArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.
          // ! ------------------
          this.contadorVidas = this.contadorVidas - 3;
          livesPoints.innerHTML = this.contadorVidas;
          if ((livesPoints.innerHTML === "0") || (livesPoints.innerHTML < "0")) {
            this.gameOn = false;
            endGame();
          }
        }
    });
  }

  heroKryptoniteCollision = () => {
    this.kryptoniteArray.forEach( (eachKryptoniteArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachKryptoniteArr.kryptoniteX + eachKryptoniteArr.kryptoniteW &&
        this.hero.heroX + this.hero.heroW > eachKryptoniteArr.kryptoniteX &&
        this.hero.heroY < eachKryptoniteArr.kryptoniteY + eachKryptoniteArr.kryptoniteH &&
        this.hero.heroH + this.hero.heroY > eachKryptoniteArr.kryptoniteY) {
          console.log("Colision con kryptonita.");
          this.sound.injuryHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.kryptoniteArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.
          // ! ------------------
          // this.contadorVidas = this.contadorVidas - 3;
          // livesPoints.innerHTML = this.contadorVidas;
          // if ((livesPoints.innerHTML === "0") || (livesPoints.innerHTML < "0")) {
          //   this.gameOn = false;
          //   endGame();
          // }
          this.hero.heroY = canvas.height - this.hero.heroH;
        }
    });
  }

  heroLifeCollision = () => {
    this.lifeArray.forEach( (eachLifeArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachLifeArr.lifeX + eachLifeArr.lifeW &&
        this.hero.heroX + this.hero.heroW > eachLifeArr.lifeX &&
        this.hero.heroY < eachLifeArr.lifeY + eachLifeArr.lifeH &&
        this.hero.heroH + this.hero.heroY > eachLifeArr.lifeY) {
          console.log("Colision con vida.");
          this.sound.lifeHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.lifeArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.
          if ((this.contadorVidas >= 1) && (this.contadorVidas < 3)) {
            this.contadorVidas = this.contadorVidas + 1;
            livesPoints.innerHTML = this.contadorVidas;
          }
        }
    });
  }

  heroPointsCollision = () => {
    this.pointsArray.forEach( (eachPointsArr, index) => { // * Pasamos al forEach un parámetro de entrada y un index. El each para la comparativa de colisión y el index para gestionar la eliminación del objeto en el array si existe colisión.
      if (this.hero.heroX < eachPointsArr.pointsX + eachPointsArr.pointsW &&
        this.hero.heroX + this.hero.heroW > eachPointsArr.pointsX &&
        this.hero.heroY < eachPointsArr.pointsY + eachPointsArr.pointsH &&
        this.hero.heroH + this.hero.heroY > eachPointsArr.pointsY) {
          console.log("Colision con puntos.");
          this.sound.pointsHit(); // * Como hemos creado un objeto sound de la clase Sounds, podemos acceder a sus métodos a través de this.sound.injuryHit(). Cada vez que colisione nuestro héroe sonará esto.
          this.pointsArray.splice(index, 1); // * Con .splice(), el primer número es la posición del objeto del array que queremos quitar. El segundo es CUÁNTOS OBJETOS a partir de esa posición queremos quitar.

          this.globalSpeed++

          this.contador += 5;
          modifyPoints.innerHTML = this.contador;
          finalPoints.innerHTML = this.contador;
          if (this.contador === 5) {
            // console.log("Juego parado.");
            this.gameOn = false;
            endGame();
          }
          console.log(this.contador);
      }
    });
  }

  showInput = () => {
    if (inputValue.length === 0) {
      playerName.innerHTML = "Anonymous"
    } else {
      playerName.innerHTML = inputValue;
    }
  }

  // Método gameLoop que ejecuta el juego una y otra vez.
 
  gameLoop = () => {
    // console.log(this.sound.isMuted);
    // console.log(inputValue);
    // console.log(this.asteroidArray);
    // console.log(this.ufoArray);
    console.log("Juego andando."); // * Comprobación de que el juego tira correctamente.
    // *! ---------------------------------------------------
    
    // 1.) Borrar el canvas
    context.clearRect(0, 0, canvas.width, canvas.height); 

    // *! ---------------------------------------------------

    // 2.) Acciones o movimientos de los elementos, como creaciones, saltos...
    this.hero.heroFriction(); // * Invoca al método que nos arrastra hacia arriba o abajo del canvas dependiendo en qué mitad estemos, independientemente de que pulsemos una tecla o no.

    this.addAsteroids(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addMiniAsteroids(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addLife(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addPoints() // * Invocamos al método para ir añadiendo elementos al array.
    this.addUfos(); // * Invocamos al método para ir añadiendo elementos al array.
    this.addKryptonite(); // * Invocamos al método para ir añadiendo elementos al array.

    this.heroAsteroidCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    this.heroMiniAsteroidCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    this.heroUfoCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    this.heroLifeCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    this.heroPointsCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    this.heroKryptoniteCollision(); // * Invocamos al método para que se ejecute la colisión entre elementos.
    
    // * Antes de ser un array, cada objeto individual era: this.miniAsteroid.moveMiniAsteroid();
    this.asteroidArray.forEach( (eachAsteroid, index) => {
      eachAsteroid.moveAsteroid();
      if (eachAsteroid.asteroidX < -eachAsteroid.asteroidW) {
        this.asteroidArray.splice(index, 1);
      }
    });

    // * Antes de ser un array, cada objeto individual era: this.asteroid.moveAsteroid();
    this.miniAsteroidArray.forEach( (eachMiniAsteroid, index) => {
      eachMiniAsteroid.moveMiniAsteroid();
      if (eachMiniAsteroid.miniAsteroidX < -eachMiniAsteroid.miniAsteroidW) {
        this.miniAsteroidArray.splice(index, 1);
      }
    });

    // * Antes de ser un array, cada objeto individual era: this.life.moveLife();
    this.lifeArray.forEach( (eachLife, index) => {
      eachLife.moveLife();
      if (eachLife.lifeX < -eachLife.lifeW) {
        this.lifeArray.splice(index, 1);
      }
    });

    // * Antes de ser un array, cada objeto individual era: this.points.movePoints();
    this.pointsArray.forEach( (eachPoints, index) => {
      eachPoints.movePoints();
      if (eachPoints.pointsX < -eachPoints.pointsW) {
        this.pointsArray.splice(index, 1);
      }
    });

    // * Antes de ser un array, cada objeto individual era: this.ufo.moveUfo();
    this.ufoArray.forEach( (eachUfo, index) => {
      eachUfo.moveUfo();
      if (eachUfo.ufoX < -eachUfo.ufoW) {
        this.ufoArray.splice(index, 1);
      }
    });

    // * Antes de ser un array, cada objeto individual era: this.kryptonite.moveKryptonite();
    this.kryptoniteArray.forEach( (eachKryptonite, index) => {
      eachKryptonite.moveKryptonite();
      if (eachKryptonite.kryptoniteX < -eachKryptonite.kryptoniteW) {
        this.kryptoniteArray.splice(index, 1);
      }
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

    // * Ya no podemos hacer esto: this.ufo.drawUfo(); Tenemos que hacer un bucle para que pinte cada elemento del array.
    this.kryptoniteArray.forEach( (eachKryptonite) => {
      eachKryptonite.drawKryptonite();
    });

    game.showInput(); // * Función que ejecuta el introducir el nombre del usuario (o mostrar que es anónimo) en el HTML.

    // *! ---------------------------------------------------

    // 4.) Control y recursión
    if (this.gameOn) {
      requestAnimationFrame(this.gameLoop);  // * Función recursiva (gameLoop autoinvoca a gameLoop). Si gameOn es falso, el juego se detiene.
    } 
    
  };
}
