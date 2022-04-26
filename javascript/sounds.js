class Sounds {
  constructor() {
    this.buttonSound = new Audio("./sounds/button.wav");
    this.backgroundMusic = new Audio("./sounds/background-music.mp3");
    this.mainMenuMusic = new Audio("./sounds/menu.mp3");
  }

  clickSound = () => {
    this.buttonSound.preload = "auto";
    this.buttonSound.play();
    this.buttonSound.volume = 0.1;
  };

  menuMusic = () => {
    this.mainMenuMusic.preload = "auto";
    this.mainMenuMusic.play();
    this.mainMenuMusic.volume = 0.05;
  };

  mainMusic = () => {
    this.backgroundMusic.preload = "auto";
    this.backgroundMusic.play();
    this.backgroundMusic.volume = 0.4;
    this.backgroundMusic.loop = true;
  };
}
       