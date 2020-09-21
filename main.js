const section = document.querySelector("section");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const count = document.querySelector(".count");
// const bug = document.querySelector(".bug");
// const carrot = document.querySelector(".carrot");

let topPosition;
let leftPosition;
let id;
let num = 9;

id = 0;
const randomPosition = () => {
  topPosition = Math.floor(Math.random() * 40) + 50;
  leftPosition = Math.floor(Math.random() * 100) + 1;
};
const createBug = () => {
  randomPosition();
  const image = document.createElement("img");
  image.src = "img/bug.png";
  image.setAttribute("class", "bug");
  image.setAttribute("data-id", `${id}`);
  image.style.position = "absolute";
  image.style.top = `${topPosition}%`;
  image.style.left = `${leftPosition}%`;
  section.appendChild(image);
  id++;
};
const createCarrot = () => {
  randomPosition();
  const image = document.createElement("img");
  image.setAttribute("class", "carrot");
  image.src = "img/carrot.png";
  image.setAttribute("data-id", `${id}`);
  image.style.position = "absolute";
  image.style.top = `${topPosition}%`;
  image.style.left = `${leftPosition}%`;
  section.appendChild(image);
  id++;
};

const deleteBug = () => {
  const bug = document.querySelector(".bug");
  bug.addEventListener("click", (e) => {
    e.target.remove();
  });
};
const deleteCarrot = () => {
  const carrot = document.querySelector(".carrot");
  carrot.addEventListener("click", (e) => {
    e.target.remove();
  });
};
const countdown = setInterval(function () {
  if (num <= 0) {
    clearInterval(countdown);
    alert("Game Over");
  }
  timer.innerHTML = `00:0${num}`;
  num = num - 1;
}, 1000);

const countBug = () => {
  count.innerHTML = `10`;
};
button.addEventListener("click", () => {
  countBug();
  createBug();
  createBug();
  createBug();
  createBug();
  createBug();
  createCarrot();
  createCarrot();
  createCarrot();
  createCarrot();
  createCarrot();
  deleteCarrot();
  deleteBug();
});
