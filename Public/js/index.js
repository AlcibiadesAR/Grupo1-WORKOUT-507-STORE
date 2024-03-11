//======cambio de modo=========
let icon = document.querySelector("#fa-sun");
let body = document.querySelector("body");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let h1 = document.querySelector("h1");
let shoppingIcon = document.querySelector("main i");

let iconhabilitado = false;

icon.addEventListener("click", function () {
  iconhabilitado = !iconhabilitado;
  if (iconhabilitado) {
    lightMode(body, header, footer, icon);
  } else {
    darkMode(body, header, footer, icon, h1, shoppingIcon);
  }
});

//modo lightMode
function lightMode(body, header, footer, icon) {
  body.style.backgroundImage =
    "url(https://png.pngtree.com/background/20230519/original/pngtree-an-old-gym-setting-with-dumbbells-picture-image_2667256.jpg)";
  body.style.backgroundRepeat = "no repeat";
  body.style.backgroundSize = "cover";
  header.style.backgroundColor = "#00e1ff";
  footer.style.backgroundColor = "#00e1ff";
  footer.style.hover = "red";
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

//modo darkMode
function darkMode(body, header, footer, icon, h1, shoppingIcon) {
  body.style.backgroundImage = "none";
  body.style.backgroundColor = "#000";
  header.style.backgroundColor = "#2C2F35";
  footer.style.backgroundColor = "#2C2F35";
  footer.style.borderTop = "2px solid #a9a9a9";
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  h1.style.color = "#fff";
  h1.style.borderBottom = "2px solid #fff";
  shoppingIcon.style.color = "#fff";
}

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



//=========rutas de botones===========
//boton para ir al carrito de compras
let botonCar = document.querySelector("#button-cars-carrito");
botonCar.addEventListener("click", function () {
  window.location.href = "/carrito.html";
});

// ========Funciones para el carrito============

//visibilidad del carrito
let carrito = document.querySelector(".fa-cart-shopping");
let boxCarrito = document.querySelector(".box-car");

let carritoVisible = false;

carrito.addEventListener("click", function () {
  if (carritoVisible) {
    boxCarrito.style.opacity = "0";
    boxCarrito.style.visibility = "hidden";
  } else {
    boxCarrito.style.opacity = "1";
    boxCarrito.style.visibility = "visible";
  }
  carritoVisible = !carritoVisible;
});
