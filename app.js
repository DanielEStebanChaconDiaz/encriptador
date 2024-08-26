const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.EXPRESS_PORT;

// Sirve archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://${process.env.EXPRESS_HOST}:${port}`);
});
