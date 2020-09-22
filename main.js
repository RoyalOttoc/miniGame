const section = document.querySelector("section");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const end = document.querySelector(".end");
const count = document.querySelector(".count");

// const bug = document.querySelector(".bug");
// const carrot = document.querySelector(".carrot");

let topPosition;
let leftPosition;
let id;
let num = 9;
let countNum;


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
  
  const bugID = document.querySelectorAll(".bug");
  bugID.forEach(bugs => {
    bugs.addEventListener("click", event=>{
      countNum = countNum - 1;
      
      event.target.remove()
      if(countNum == 0){
        endGame("You Won");
        

      }count.innerHTML = `${countNum}`
      
    })
  })
 
};
const noCarrot = () => {
    const carrotID = document.querySelectorAll(".carrot");
  carrotID.forEach(carrots => {
    carrots.addEventListener("click", event=>{
      const redo = document.querySelector(".end__btn");
      const msg = document.querySelector(".end__text");
       end.style.opacity = "1";
     redo.addEventListener("click", ()=>{
    window.location.reload()
  })
    })
  })
};


const countBug = () => {
  countNum = 5
  count.innerHTML = `${countNum}`;
};

const endGame = (text) =>{
  const redo = document.querySelector(".end__btn");
  const msg = document.querySelector(".end__text");
  end.style.opacity = "1";
  msg.innerHTML = `${text}`
  redo.addEventListener("click", ()=>{
    window.location.reload()
  })
  
}
button.addEventListener("click", () => {
  
  button.innerHTML = `<i class="fas fa-stop"></i>`
  
  const countdown = setInterval(function () {
  if (num <= 0) {
    clearInterval(countdown);
    button.innerHTML = `<i class="fas fa-play"></i>`
    endGame()
  } else if(countNum == 0){
    clearInterval(countdown);
    button.style.opacity = "0";
  }
  timer.innerHTML = `00:0${num}`;
  num = num - 1;
}, 1000);

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
  
  deleteBug();
  noCarrot();

 
});
