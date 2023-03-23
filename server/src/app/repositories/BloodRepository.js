const db = require('../../database');

class BloodRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM tipos_sanguineos ORDER BY tipo ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM tipos_sanguineos WHERE id = $1', [id]);

    return row;
  }

  async findByTypeAndFactor(tipo, fator) {
    const [row] = await db.query('SELECT * FROM tipos_sanguineos WHERE tipo = $1 AND fator = $2', [tipo, fator]);

    return row;
  }

  async create({
    tipo, fator,
  }) {
    const [row] = await db.query(`
        INSERT INTO tipos_sanguineos(tipo, fator)
        VALUES ($1, $2)
        RETURNING *
    `, [tipo, fator]);

    return row;
  }

  async delete(id) {
    const deleteOP = await db.query('DELETE FROM tipos_sanguineos WHERE id = $1', [id]);

    return deleteOP;
  }
}

module.exports = new BloodRepository();
