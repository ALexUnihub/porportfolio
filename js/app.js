// Parallax scrolling
let clouds = document.querySelector('.clouds');
let mountainsBackground = document.querySelector('.mountains-background');
let mountainsMiddle = document.querySelector('.mountains-middle');
let mountainsFront = document.querySelector('.mountains-front');
let forest = document.querySelector('.forest');
let nameHeader = document.querySelector('.intro').querySelector('h1');

window.addEventListener('scroll', scrollListener);
function scrollListener() {
  let value = window.scrollY;
  clouds.style.top = value * 0.1 + 'px';
  mountainsBackground.style.top = value * 0.7 + 'px';
  mountainsMiddle.style.top = value * 0.6 + 'px';
  mountainsFront.style.top = value * 0.5 + 'px';
  forest.style.top = value * 0 + 'px';
  nameHeader.style.top = value * 0.7 + 'px';
}

// Scrolling animations
let throttleTimer = false;
 
const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}

function isInView(elem, offsetTop = 0) {
  const elemTop = elem.getBoundingClientRect().top;
  return elemTop <= document.documentElement.clientHeight + offsetTop;
}

function outOfView(elem, offsetTop = 0) {
  const elemTop = elem.getBoundingClientRect().top;
  return elemTop >= document.documentElement.clientHeight - offsetTop;
}

const handlerScrollListener = () => {
  const offsetTop = 200;
  const offsetTopHeader = 1000;
  const height = document.documentElement.clientHeight;
  const cardHeight = document.querySelector('.skills').getBoundingClientRect().top;
  
  let scrollElemHeader = document.querySelector('.scroll-animation-header');
  let scrollElemList =  document.querySelectorAll('.scroll-animation');
  let scrollElemListCards = document.querySelectorAll('.scroll-animation-card');

  if (window.scrollY + offsetTopHeader >= height) {

    if (!scrollElemHeader.classList.contains('scrolled')) {
      scrollElemHeader.classList.add('scrolled');
    }

    for (let elem of scrollElemList) {
      if (isInView(elem, offsetTop)) {
        elem.classList.add('scrolled');
      }
    }
  }

  if (offsetTop + 1000 >= cardHeight) {
    for (let elem of scrollElemListCards) {
      elem.classList.add('scrolled');
    }
  }
}

window.addEventListener('scroll', () => {
  throttle(handlerScrollListener, 100);
});