require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ineRoutes = require('./routes/ineRoutes');

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas del microservicio INE
app.use('/', ineRoutes); // Ruta base directa

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Servicio INE funcionando' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Microservicio INE ejecutándose en http://localhost:${PORT}`);
});