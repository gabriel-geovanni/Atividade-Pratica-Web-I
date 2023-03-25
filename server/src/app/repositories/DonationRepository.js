const db = require('../../database');

class DonationRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM doacoes ORDER BY pessoa_id ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM doacoes WHERE id = $1', [id]);

    return row;
  }

  async findByPerson(pessoa_id) {
    const rows = await db.query('SELECT * FROM doacoes WHERE pessoa_id = $1', [pessoa_id]);

    return rows;
  }

  async findByLocal(local_id) {
    const rows = await db.query('SELECT * FROM doacoes WHERE local_id = $1', [local_id]);

    return rows;
  }

  async create({
    pessoa_id, local_id, quantidade, data_doacao,
  }) {
    const [row] = await db.query(`
    INSERT INTO doacoes (pessoa_id, local_id,quantidade, data_doacao)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [pessoa_id, local_id, quantidade, data_doacao]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM doacoes WHERE id = $1', [id]);
    return deleteOp;
  }
}
module.exports = new DonationRepository();
