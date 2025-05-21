const express = require('express');
const router = express.Router();
const ineController = require('../controllers/ineController');

// CRUD para la tabla INE
router.post('/', ineController.create);
router.get('/', ineController.getAll);
router.get('/:id', ineController.getById);
router.get('/curp/:curp', ineController.getByCurp);
router.get('/clave/:clave_ine', ineController.getByClaveIne); // Nueva ruta
router.delete('/curp/:curp', ineController.deleteByCurp);

module.exports = router;
