const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3004;
app.listen(port, function () {
    console.log('Servidor Levantado en el puerto ' + port);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/carrito.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

app.get('/registro.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/detalles.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/detalles.html'));
});

