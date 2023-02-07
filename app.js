const imgContainer = document.getElementById("img-container");
const img = document.querySelectorAll("#img-container img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

console.log(img);
let i = 0;

let interval = setInterval(play, 3000);

function play() {
  i++;
  getImage();
};

function getImage() {
  if (i > img.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = img.length - 1;
  }
  imgContainer.style.transform = `translateX(${-i * 500}px)`;
};

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(play, 3000);
};

prevBtn.addEventListener("click", () => {
  i--;
  getImage();
  resetInterval();
});
nextBtn.addEventListener("click", () => {
  i++;
  getImage();
  resetInterval();
});
