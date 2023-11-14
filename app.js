const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

// Configura la carpeta 'public' para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura la carpeta 'views' para vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); // Asumiendo que tus archivos son HTML

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(` Servidor Corriendo ${port}`);
});
