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
const port = process.env.PORT || 7000;
app.listen(port, function () {
  console.log('Servidor Levantado 🎉');
});

// creacion de las rutas

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/carrito.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});

app.get("/registro.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

app.get("/detallesDelProducto.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/detallesDelProducto.html"));
});

app.get('/js/main.js', function(req, res) {
  res.type('application/javascript');
  res.sendFile(path.resolve(__dirname, '../js/main.js'));
});

