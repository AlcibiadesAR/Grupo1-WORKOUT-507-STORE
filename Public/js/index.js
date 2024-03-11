/*cambio de modo*/
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

function lightMode(body, header, footer, icon) {
  body.style.backgroundImage =
    "url(https://png.pngtree.com/background/20230519/original/pngtree-an-old-gym-setting-with-dumbbells-picture-image_2667256.jpg)";
  body.style.backgroundRepeat = "no repeat";
  body.style.backgroundSize = "cover";
  header.style.backgroundColor = "#00e1ff";
  footer.style.backgroundColor = "#00e1ff";
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

function darkMode(body, header, footer, icon, h1, shoppingIcon) {
  body.style.backgroundImage = "none";
  body.style.backgroundColor = "#000";
  header.style.backgroundColor = "#00e1ff";
  footer.style.backgroundColor = "#00e1ff";
  footer.style.borderTop = "2px solid #a9a9a9";
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  h1.style.color = "#fff";
  h1.style.borderBottom = "2px solid #fff";
  shoppingIcon.style.color = "#fff";
}

/*rutas de botones*/
let botonCar = document.querySelector("#myButton");
botonCar.addEventListener("click", function () {
  window.location.href = "/carrito.html";
});

/* Carrito */
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

/*localStorage*/
function guardarLocalStorage() {
  let products = [
    {
      id: "1",
      name: "Juego de Mancuernas",
      precio: 50.99,
      Image: "../Images/juego_de_mancuernas.webp",
      stock: 5,
    },
    {
      id: "2",
      name: "Mancuernas par De 5Lbs",
      precio: 25.99,
      Image: "../Images/par_de_mancuernas.jpg",
      stock: 10,
    },
    {
      id: "3",
      name: "Bicicleta estatica RALI",
      precio: 315.0,
      Image: "../Images/bici_estatica_rali.jpg",
      stock: 5,
    },
    {
      id: "4",
      name: "Banco De Mancuernas",
      precio: 159.99,
      Image: "../Images/banco_de_mancuernas.jpg",
      stock: 5,
    },
    {
      id: "5",
      name: "Barra Recta De 1,5m De Largo",
      precio: 25.99,
      Image: "../Images/barra_recta.jpg",
      stock: 10,
    },
    {
      id: "6",
      name: "Guantes De Boxeo Everlast Classic",
      precio: 49.99,
      Image: "../Images/guantes_everlast.jpg",
      stock: 8,
    },
    {
      id: "7",
      name: "Cuerda Para Saltar Everlast",
      precio: 9.99,
      Image: "../Images/cuerda_para_saltar.jpg",
      stock: 12,
    },
    {
      id: "8",
      name: "Saco De Boxeo Everlast",
      precio: 899.95,
      Image: "../Images/saco_de_boxeo.jpg",
      stock: 5,
    },
    {
      id: "9",
      name: "Pera De Boxeo Everlast",
      precio: 34.95,
      Image: "../Images/pera_de_boxeo.jpg",
      stock: 8,
    },
    {
      id: "10",
      name: "Maquinaria De Abdominales",
      precio: 269.99,
      Image: "../Images/maquina_abdominales.jpg",
      stock: 6,
    },
    {
      id: "11",
      name: "Maquina Prensa De Hombro",
      precio: 2100.0,
      Image: "../Images/prensa_de_hombro.jpg",
      stock: 6,
    },
    {
      id: "12",
      name: "Banco De Pesas Negro",
      precio: 159.99,
      Image: "../Images/banco_de_pesas.jpg",
      stock: 6,
    },
  ];

  products.forEach((product) => {
    localStorage.setItem(`Product_${product.id}`, JSON.stringify(product));
  });
}

guardarLocalStorage();

function obtenerLocalStorage(productId) {
  if (localStorage.getItem(`Product_${productId}`)) {
    let producto = JSON.parse(localStorage.getItem(`Product_${productId}`));

    console.log("Producto encontrado:", producto);
  } else {
    console.log("Producto no encontrado");
  }
}

obtenerLocalStorage("1");

/*aumentar, disminuir y eliminar */
