

const itemss = Array.from(document.querySelectorAll(".navbar ul li"));
const styles = itemss.map((item) => window.getComputedStyle(item));



let imgs = document.querySelectorAll(".slide"),
  current = 0,
  rightArrow = document.querySelector(".right"),
  leftArrow = document.querySelector(".left"),
  slide = document.querySelectorAll(".slide"),
  imgContainer = document.querySelector(".slides"),
  navbar = document.querySelector(".navbar"),
  body = document.querySelector("body");

//Image Slider Functionality

function reset() {
  imgs.forEach((img) => {
    img.classList.add("hideImg");
  });
}

function startSlide() {
  reset();
  imgs[0].classList.remove("hideImg");
  imgs[0].classList.add("showImg");
}

function next() {
  reset();
  imgs[current + 1].classList.remove("hideImg");
  imgs[current + 1].classList.add("showImg");
  current++;
}

function last() {
  reset();
  imgs[current - 1].classList.remove("hideImg");
  imgs[current - 1].classList.add("showImg");
  current--;
}

function leftOrRight(e) {
  if (
    (e.offsetX > imgContainer.getBoundingClientRect().width / 2 &&
      e.offsetY < imgContainer.getBoundingClientRect().height) ||
    e.keyCode == 39
  ) {
    if (current === imgs.length - 1) {
      current = -1;
    }
    next();
  }
  if (
    (e.offsetX < window.innerWidth / 2 &&
      e.offsetY < imgContainer.getBoundingClientRect().height) ||
    e.keyCode == 37
  ) {
    if (current === 0) {
      current = imgs.length;
    }
    last();
  }
}

function removeClass(element, classToRemove) {
  element.classList.remove(classToRemove);
}
function addClass(element, classToAdd) {
  element.classList.remove(classToAdd);
}

imgContainer.addEventListener("keyup", leftOrRight);
imgContainer.addEventListener("click", leftOrRight);

startSlide();

let looper = setInterval(() => {
  if (current === imgs.length - 1) {
    current = -1;
  }
  next();
}, 4500);

imgContainer.addEventListener("mouseenter", (e) => {
  clearInterval(looper);
  slide.forEach((slide) => {
    slide.style.backgroundColor = "transparent";
  });
});

slide.forEach((slide) => {
  slide.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x > imgContainer.getBoundingClientRect().width / 2) {
      rightArrow.classList.add("showArrow");
    } else {
      rightArrow.classList.remove("showArrow");
    }
    if (x < imgContainer.getBoundingClientRect().width / 2) {
      rightArrow.classList.remove("showArrow");
      leftArrow.classList.add("showArrow");
    } else {
      leftArrow.classList.remove("showArrow");
    }
  });
});

imgContainer.addEventListener("mouseleave", function (e) {
  looper = setInterval(() => {
    if (current === imgs.length - 1) {
      current = -1;
    }
    next();
  }, 4500);

  imgs.forEach((img) => {
    removeClass(rightArrow, "showArrow");
    removeClass(leftArrow, "showArrow");
  });
  slide.forEach((slide) => {
    slide.style.backgroundColor = "rgba(0,0,0,0.4)";
  });
});
//Navbar Functionality

function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let navTop = navbar.offsetTop;

function stickNav() {
  if (window.scrollY >= navTop) {
    body.style.paddingTop = navbar.offsetHeight + "px";
    body.classList.add("fixed-nav");
  } else {
    body.style.paddingTop = 0;
    body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", debounce(stickNav));

let coldMenu = document.querySelector(".coldMenu");
let hotMenu = document.querySelector(".hotMenu");

let drinks = [];

let coldButton = document.querySelector(".cold");

let menuChoice = document.querySelector(".menuChoice");
let hotButton = document.querySelector(".hot");

let coldFetched = false;
coldButton.addEventListener("click", () => {
  coldMenu.style.display = "flex";
  if ((hotMenu.style.display = "flex")) {
    hotMenu.style.display = "none";
  }

  if (!coldFetched) {
    fetch("./menu.JSON", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        drinks = [...data.coldDrinks];

        for (var i = 0; i < drinks.length; i++) {
          coldMenu.innerHTML += `<div class="menuImgContainer"><img src="${drinks[i].img}" alt="${drinks[i].drink}" class="menuImg"><span>${drinks[i].drink}</span></div>`;
        }
        coldMenu.scrollIntoView();
      });
  }
  coldFetched = true;
});

let hotFetched = false;
hotButton.addEventListener("click", () => {
  hotMenu.style.display = "flex";
  if ((coldMenu.style.display = "flex")) {
    coldMenu.style.display = "none";
  }

  if (!hotFetched) {
    fetch("./menu.JSON", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        drinks = [...data.hotDrinks];

        for (var i = 0; i < drinks.length; i++) {
          hotMenu.innerHTML += `<div class="menuImgContainer"><img src="${drinks[i].img}" alt="${drinks[i].drink}" class="menuImg"><span>${drinks[i].drink}</span></div>`;
        }

        hotMenu.scrollIntoView();
      });
  }
  hotFetched = true;
});

let myBtn = document.querySelector(".myBtn"),
  content = document.querySelector(".content"),
  overlayContainer = document.querySelector(".overlayContainer"),
  overlay = document.querySelector(".overlay");





function fadeOut() {
console.log(mixer);
  document.getElementById("canvas-container").style.display = "none";
  document.getElementById("overlayContainer").style.display = "none";
  TweenMax.to(".myBtn", 0.5, {
    y: -100,
    opacity: 0
  });

  TweenMax.to(".backText", 1, {
    y: -400,
    opacity: 0,
    ease: Power4.easeInOut,
    delay: 1
  });

  TweenMax.from(".overlay", 1.2, {
    ease: Power2.easeInOut,
    onComplete: overflow
  });

  TweenMax.to(".overlay", 2, {
    delay: 1.6,
    top: "-110%",
    ease: Expo.easeInOut,
    visibility: "hidden"
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////HERE//////////////////////////////////////////////////////////////////////////////////////////
  TweenMax.staggerFrom(
    ".navbar ul li",
    1,
    {
      delay: 2,
      opacity: 0,
      y: 8,
      ease: Expo.easeInOut
    },
    0.2
  );

  function overflow() {
    content.style.display = "initial";
    body.style.overflow = "auto";
  }
}

let movementStrength = 10;
let height = movementStrength / window.innerHeight;
let width = movementStrength / window.innerWidth;

overlay.addEventListener("mousemove", (e) => {
  let pageX = e.pageX;
  let pageY = e.pageY;
  let newValueX = width * pageX;
  let newValueY = height * pageY;
  overlay.style.backgroundPosition = `${newValueX}px ${newValueY}px`;
});

function Player() { 

    // setUpDeVariables
    this.currentDiapositiva  = 0;
    this.isMuted = true;
    this.isPaused = true;
    this.autoScrolling = false;
    this.currentStateInside = 0;
    this.currentPostionScroll = 0;
    // controla el paso a la siguiente diapositiva
    this.finalStateForward = false;
    this.startStateBackward = false;

    this.setNewMatrix = function (datos){
        
    }
}



