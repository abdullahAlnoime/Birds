let typesImg = document.querySelectorAll('.types div .image-birds img');
let hamburger = document.querySelector('header nav > img') ;
let bullets = document.querySelector('header nav .bullets') ;
let bulletsLink = document.querySelectorAll('header nav .bullets div span a') ;
let specialImg = document.querySelectorAll('.some .special-desktop .img-sp-desk img') ;
let specialDes = document.querySelectorAll('.some .special-desktop .desc-sp-desk div') ;
setInterval(() => {
  typesImg.forEach((elm) => {
    elm.classList.toggle('loop') ;
  }); 
},5000); 
hamburger.onclick = function() {
  bullets.classList.toggle('active') ;
};
bulletsLink.forEach((elm) => {
  elm.onclick = function() {
    bullets.classList.toggle('active') ;
  }
});
specialImg.forEach((elm, ind) => {
  elm.onclick = function() {
    removeAll() ;
    elm.classList.add('showImg') ;
    specialDes[ind].classList.add('showDesc') ;
  };
});
function removeAll() {
  specialImg.forEach((elm, ind) => {
    elm.classList.remove('showImg') ;
    specialDes[ind].classList.remove('showDesc') ;
  });
}
let buttonAR = document.querySelector('.buttons .lang button:first-of-type') ;
let buttonEN = document.querySelector('.buttons .lang button:last-of-type') ;
let scrollUP = document.querySelector('.buttons img') ;
buttonAR.onclick = function () {
  location.href = 'index-ar.html' ;
};
buttonEN.onclick = function() {
  location.href = 'index.html';
};
scrollUP.onclick = function () {
  window.scroll(0,0) ;
};