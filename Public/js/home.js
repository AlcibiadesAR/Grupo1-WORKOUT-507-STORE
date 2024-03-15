//=========menu==============
//animacion del boton de menu
let buttonMenu = document.querySelector("#menu");
let menuDivs = document.querySelectorAll("#menu div");
let menu = document.querySelector(".box-menu");


let menuOpen = false; 

buttonMenu.addEventListener("click", function () {
  if (!menuOpen) {
    menu.style.display = "block";
    menuDivs[0].style.transform = "rotate(45deg)";
    menuDivs[1].style.opacity = "0";
    menuDivs[2].style.transform = "rotate(-45deg)";
  } else {
    setTimeout(function () {
      menu.style.display = "none";
    }, 500);
    menuDivs[0].style.transform = "rotate(0)";
    menuDivs[1].style.opacity = "1";
    menuDivs[2].style.transform = "rotate(0)";
  }

  menuOpen = !menuOpen;
});

/*========slider========*/
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('#gallery');
   const tImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + tImages) % tImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}


