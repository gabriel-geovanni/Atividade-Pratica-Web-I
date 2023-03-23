const BloodRepository = require('../repositories/BloodRepository');

class BloodController {
  async index(request, response) {
    const { orderBy } = request.query;
    const blood = await BloodRepository.findAll(orderBy);

    response.send(blood);
  }

  async show(request, response) {
    const { id } = request.params;
    const blood = await BloodRepository.findById(id);

    response.send(blood);
  }

  async store(request, response) {
    const {
      tipo, fator,
    } = request.body;

    if (!tipo) {
      return response.status(400).json({ error: 'Selecione o tipo sanguíneo' });
    }

    if (!fator) {
      return response.status(400).json({ error: 'Selecione o fator sanguíneo (" + " ou " - ")' });
    }

    const checkBlood = await BloodRepository.findByTypeAndFactor(tipo, fator);
    if (checkBlood) {
      return response.status(400).json({ error: 'Tipo sanguíneo já cadastrado' });
    }

    const blood = await BloodRepository.create({
      tipo, fator,
    });

    response.send(blood);
  }

  async delete(request, response) {
    const { id } = request.params;

    await BloodRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new BloodController();
