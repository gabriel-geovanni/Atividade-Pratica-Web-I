const db = require('../../database');

class LocalRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM locais_coleta ORDER BY nome ${direction}`);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM locais_coleta WHERE id = $1', [id]);

    return rows;
  }

  async findByName(nome) {
    const row = await db.query('SELECT * FROM locais_coleta WHERE nome LIKE $1', [`%${nome}%`]);

    return row;
  }

  async findByCity(cidade) {
    const row = await db.query('SELECT * FROM locais_coleta WHERE cidade = $1', [cidade]);

    return row;
  }

  async findByState(estado) {
    const row = await db.query('SELECT * FROM locais_coleta WHERE estado = $1', [estado]);

    return row;
  }

  async findByAdress(rua, numero) {
    const [row] = await db.query('SELECT * FROM locais_coleta WHERE rua = $1 AND numero = $2', [rua, numero]);

    return row;
  }

  async create({
    nome, rua, numero, complemento, cidade, estado,
  }) {
    const [row] = await db.query(`
        INSERT INTO locais_coleta(nome, rua, numero, complemento, cidade, estado)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
    `, [nome, rua, numero, complemento, cidade, estado]);

    return row;
  }

  async update(id, {
    nome, rua, numero, complemento, cidade, estado, updated_at,
  }) {
    const [row] = await db.query(`
        UPDATE locais_coleta
        SET nome = $1, rua = $2, numero = $3, complemento = $4, cidade = $5, estado = $6, updated_at = $7
        WHERE id = $8
        RETURNING *
    `, [nome, rua, numero, complemento, cidade, estado, updated_at, id]);

    return row;
  }

  async delete(id) {
    const deleteOP = await db.query('DELETE FROM locais_coleta WHERE id = $1', [id]);

    return deleteOP;
  }
}

module.exports = new LocalRepository();
