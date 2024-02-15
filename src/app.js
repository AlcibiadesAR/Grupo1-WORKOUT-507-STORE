// Importar Express para crear un servidor web
const express = require("express");

// Importar 'path' para manejar rutas de archivos
const path = require("path");

// Crear una aplicación Express
const app = express();

// Directorio para archivos como imágenes y estilos
const publicpath = path.resolve(__dirname, "../public");
app.use(express.static(publicpath));

// Iniciar servidor en el puerto 7000
app.listen(7000, () => {
  console.log("Server running on port 7000");
});

// ruta para la página principal en '/'
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

// ruta para la página de carrito en '/carrito.html'
app.get("/carrito.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});
