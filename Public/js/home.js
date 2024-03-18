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
let botonRight = document.querySelector("#fa-right");
let botonLeft = document.querySelector("#fa-left");
let Slider = document.querySelector("#slider");
let sectionSlider = document.querySelectorAll(".section-img");

botonRight.addEventListener("click", function(){
  MoveRigth();
});

botonLeft.addEventListener("click", function(){
  Moveleft();
});

setInterval(() => {
  MoveRigth();
}, 4000);

let contador = 0;
let calculo = 0;
let imgWidth = 500 / sectionSlider.length;

function MoveRigth() {
  if (contador >= sectionSlider.length - 1) {
    contador = 0;
    calculo = 0;
    Slider.style.transform = `translate(-${calculo}%)`;
    Slider.style.transition = "none";
  } else {
    contador++;
    calculo = calculo + imgWidth;
    Slider.style.transform = `translate(-${calculo}%)`;
    Slider.style.transition = "all ease .6s";
  }
}

function Moveleft() {
  contador--;
  if (contador < 0) {
    contador = sectionSlider.length-1;
    calculo = imgWidth * (sectionSlider.length-1)
    Slider.style.transform = `translate(-${calculo}%)`;
    Slider.style.transition = "none";
  } else {
    calculo = calculo - imgWidth;
    Slider.style.transform = `translate(-${calculo}%)`;
    Slider.style.transition = "all ease .6s";
  }
}
