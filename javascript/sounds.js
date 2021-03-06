class Sounds {
  constructor() {
    this.buttonSound = new Audio("./sounds/button.wav");
    this.backgroundMusic = new Audio("./sounds/background-music.mp3");
    this.mainMenuMusic = new Audio("./sounds/menu.mp3");
    this.injurySound = new Audio("./sounds/injury.wav");
    this.pointsSound = new Audio("./sounds/points.wav");
    this.lifeSound = new Audio("./sounds/life.wav");
    this.isMuted = false;
  }

  clickSound = () => {
    this.buttonSound.preload = "auto";
    this.buttonSound.play();
    this.buttonSound.volume = 0.1;
    this.injurySound.currentTime = 0;
  };

  injuryHit = () => {
    if (this.isMuted === false) {
      this.injurySound.preload = "auto";
      this.injurySound.play();
      //   this.injurySound.volume = 1;
      this.injurySound.volume = 0.1;
      this.injurySound.currentTime = 0; // Si ponemos currentTime a 0 después del play, se reinicia automáticamente y no hay espera, por ejemplo, si las colisiones son muy seguidas.
    }
  };

  pointsHit = () => {
    if (this.isMuted === false) {
      this.pointsSound.preload = "auto";
      this.pointsSound.play();
      // this.pointsSound.volume = 0.25;
      this.pointsSound.volume = 0.1;
      this.pointsSound.currentTime = 0; // Si ponemos currentTime a 0 después del play, se reinicia automáticamente y no hay espera, por ejemplo, si las colisiones son muy seguidas.
    }
  };

  lifeHit = () => {
    if (this.isMuted === false) {
      this.lifeSound.preload = "auto";
      this.lifeSound.play();
      // this.lifeSound.volume = 0.6;
      this.lifeSound.volume = 0.1;
      this.lifeSound.currentTime = 0; // Si ponemos currentTime a 0 después del play, se reinicia automáticamente y no hay espera, por ejemplo, si las colisiones son muy seguidas.
    }
  };

  menuMusic = () => {
    this.mainMenuMusic.preload = "auto";
    this.mainMenuMusic.play();
    // this.mainMenuMusic.volume = 0.05;
    this.mainMenuMusic.volume = 0.1;
  };

  mainMusic = () => {
    this.backgroundMusic.preload = "auto";
    this.backgroundMusic.play();
    // this.backgroundMusic.volume = 0.4;
    this.backgroundMusic.volume = 0.1;
    this.backgroundMusic.loop = true;
  };

  muteAllSounds = () => {
    if (this.isMuted === true) {
      this.isMuted = false;
    } else {
      this.isMuted = true;
    }

    this.backgroundMusic.muted = !this.backgroundMusic.muted;
  };
}
