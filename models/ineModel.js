const pool = require('./db');

const ineModel = {
  async create(clave_ine, curp, persona_id) {
    const [result] = await pool.query(
      'INSERT INTO ine (clave_ine, curp, persona_id) VALUES (?, ?, ?)',
      [clave_ine, curp, persona_id]
    );
    return result.insertId;
  },

  async getAll() {
    const [rows] = await pool.query('SELECT * FROM ine');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM ine WHERE id = ?', [id]);
    return rows[0];
  },

  async getByCurp(curp) {
    const [rows] = await pool.query('SELECT * FROM ine WHERE curp = ?', [curp]);
    return rows[0];
  },

  async getByClaveIne(clave_ine) {
    const [rows] = await pool.query('SELECT * FROM ine WHERE clave_ine = ?', [clave_ine]);
    return rows[0];
  },

  async deleteByCurp(curp) {
    const [result] = await pool.query('DELETE FROM ine WHERE curp = ?', [curp]);
    return result.affectedRows;
  }
};

module.exports = ineModel;
