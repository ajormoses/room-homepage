const toggle = document.querySelector(".icon-toggle");
const hamburger = document.querySelector(".icon-hamburger");
const close = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const next = document.querySelectorAll(".arrow-right");
const prev = document.querySelectorAll(".arrow-left");
const articleSlide = document.querySelectorAll(".slide");
const hero = document.querySelectorAll(".hero");

// toggle
toggle.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  menu.classList.toggle("show");
});

// article slider
let current = 0;
let start = 0;

// clear all articles
function reset() {
  for (let i = 0; i < articleSlide.length; i++) {
    articleSlide[i].style.display = "none";
  }
}

function begin() {
  for (let j = 0; j < hero.length; j++) {
    hero[j].style.display = "none";
  }
}

// init article slide
function startSlide() {
  reset();
  articleSlide[0].style.display = "block";
}

function beginSlide() {
  begin();
  hero[0].style.display = "block";
}

// show prev
function slideLeft() {
  reset();
  articleSlide[current - 1].style.display = "block";
  current--;
}

function prevLeft() {
  begin();
  hero[start - 1].style.display = "block";
  start--;
}

// show next
function nextRight() {
  begin();
  hero[start + 1].style.display = "block";
  start++;
}

function slideRight() {
  reset();
  articleSlide[current + 1].style.display = "block";
  current++;
}

// left arrow click event listener
prev.forEach((prev) => {
  prev.addEventListener("click", () => {
    if (current === 0) {
      current = articleSlide.length;
    }

    slideLeft();

    if (start === 0) {
      start = hero.length;
    }

    prevLeft();
  });
});

// Right arrow click event listener
next.forEach((next) => {
  next.addEventListener("click", () => {
    if (current === articleSlide.length - 1) {
      current = -1;
    }
    slideRight();

    if (start === hero.length - 1) {
      start = -1;
    }
    nextRight();
  });
});

startSlide();

beginSlide();
