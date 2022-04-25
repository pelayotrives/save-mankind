class Sounds {
  constructor() {
    this.buttonSound = new Audio("./sounds/button.wav");
    this.backgroundMusic = new Audio("./sounds/background-music.mp3");
    this.mainMenuMusic = new Audio("./sounds/menu.mp3");
  }

  clickSound = () => {
    this.buttonSound.preload = "auto";
    this.buttonSound.volume = 0.2;
    this.buttonSound.play();
  };

  menuMusic = () => {
    this.mainMenuMusic.preload = "auto";
    this.mainMenuMusic.play();
    this.buttonSound.volume = 0.1;
  };

  mainMusic = () => {
    this.backgroundMusic.preload = "auto";
    this.backgroundMusic.play();
    this.backgroundMusic.loop = true;
  };
}
