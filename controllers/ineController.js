const ineModel = require('../models/ineModel');

const ineController = {
  async create(req, res) {
    try {
      const { clave_ine, curp, persona_id } = req.body;
      if (!clave_ine || !curp || !persona_id) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
      }
      const id = await ineModel.create(clave_ine, curp, persona_id);
      res.status(201).json({ id, message: 'Registro INE creado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const registros = await ineModel.getAll();
      res.json(registros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const registro = await ineModel.getById(id);
      if (!registro) {
        return res.status(404).json({ message: 'Registro INE no encontrado' });
      }
      res.json(registro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getByCurp(req, res) {
    try {
      const { curp } = req.params;
      const registro = await ineModel.getByCurp(curp);
      if (!registro) {
        return res.status(404).json({ message: 'Registro INE no encontrado' });
      }
      res.json(registro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteByCurp(req, res) {
    try {
      const { curp } = req.params;
      const affectedRows = await ineModel.deleteByCurp(curp);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Registro INE no encontrado' });
      }
      res.json({ message: 'Registro INE eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ineController;