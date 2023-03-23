const db = require('../../database');

class PeopleRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM pessoas ORDER BY nome ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM pessoas P WHERE id = $1', [id]);

    return row;
  }

  async findByName(nome) {
    const row = await db.query('SELECT * FROM pessoas WHERE nome LIKE $1', [`%${nome}%`]);
    return row;
  }

  async findByDoc(documento) {
    const [row] = await db.query('SELECT * FROM pessoas WHERE documento = $1', [documento]);

    return row;
  }

  async create({
    nome, rua, numero, complemento, documento, cidade, estado, tipo_id,
  }) {
    const [row] = await db.query(`
        INSERT INTO pessoas(nome, rua, numero, complemento, documento, cidade, estado, tipo_id)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *
        `, [nome, rua, numero, complemento, documento, cidade, estado, tipo_id]);

    return row;
  }

  async update(id, {
    nome, rua, numero, complemento, cidade, estado, updated_at,
  }) {
    const [row] = await db.query(`
        UPDATE pessoas
        SET nome = $1, rua = $2, numero = $3, complemento = $4, cidade = $5, estado=$6, updated_at = $7
        WHERE id = $8
        RETURNING *
        `, [nome, rua, numero, complemento, cidade, estado, updated_at, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM pessoas WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new PeopleRepository();
