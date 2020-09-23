const section = document.querySelector("section");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const end = document.querySelector(".end");
const count = document.querySelector(".count");

//sounds
const bgSound = new sound("sound/bg.mp3");
const bugSound = new sound("sound/bug_pull.mp3");
const carrotSound = new sound("sound/carrot_pull.mp3");
const winSound = new sound("sound/game_win.mp3");
const lostSound = new sound("sound/alert.wav");

let topPosition;
let leftPosition;
let num;
let countNum;
let bug = false;
id = 0;
const randomPosition = () => {
  topPosition = Math.floor(Math.random() * 40) + 50;
  leftPosition = Math.floor(Math.random() * 100) + 1;
};

const createItem = (item) => {
  for (i = 0; i < countNum; i++) {
    randomPosition();
    const image = document.createElement("img");
    image.src = `img/${item}.png`;
    image.setAttribute("class", `${item}`);
    image.style.position = "absolute";
    image.style.top = `${topPosition}%`;
    image.style.left = `${leftPosition}%`;
    section.appendChild(image);
    id++;
  }
};

const deleteCarrot = () => {
  section.addEventListener("click", (e) => {
    if (e.target.className === "carrot") {
      if (countNum === "1") {
        e.target.remove();
        carrotSound.play();
        endGame("You Won!!");
        bgSound.stop();
        winSound.play();
      }
      e.target.remove();
      carrotSound.play();
      countCarrot(countNum - 1);
    }
  });
};

const clickBug = () => {
  section.addEventListener("click", (e) => {
    if (e.target.className === "bug") {
      bug = true;
      bugSound.play();
      endGame("You Lost!!");
      bgSound.stop();
      lostSound.play();
    }
  });
};
const countCarrot = (num) => {
  countNum = `${num}`;
  count.innerHTML = `${countNum}`;
};

const endGame = (text) => {
  const redo = document.querySelector(".end__btn");
  const msg = document.querySelector(".end__text");
  button.style.visibility = "hidden";
  end.style.visibility = "visible";
  msg.innerHTML = `${text}`;
  redo.addEventListener("click", () => {
    window.location.reload();
  });
};

const countdown = (num) => {
  const countdownNum = setInterval(function () {
    if (num <= 0) {
      clearInterval(countdownNum);
      button.innerHTML = `<i class="fas fa-play"></i>`;
      bgSound.stop();
      lostSound.play();
      endGame("You Lost!!");
    } else if (countNum == 0) {
      clearInterval(countdownNum);
      button.style.opacity = "1";
    } else if (bug == true) {
      clearInterval(countdownNum);
    }
    timer.innerHTML = `00:0${num}`;
    num = num - 1;
  }, 1000);
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function init() {
  button.addEventListener("click", () => {
    bgSound.play();
    button.innerHTML = `<i class="fas fa-stop"></i>`;
    countdown(9);
    countCarrot(5);
    createItem("bug");
    createItem("carrot");
    clickBug();
    deleteCarrot();
  });
}

init();
