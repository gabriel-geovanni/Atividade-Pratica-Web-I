const DonationRepository = require('../repositories/DonationRepository');
const PeopleRepository = require('../repositories/PeopleRepository');
const LocalRepository = require('../repositories/LocalRepository');

class DonationController {
  async index(request, response) {
    const { orderBy } = request.query;
    const donations = await DonationRepository.findAll(orderBy);
    response.send(donations);
  }

  async showByID(request, response) {
    const { id } = request.params;
    const donation = await DonationRepository.findById(id);
    response.send(donation);
  }

  async showByPerson(request, response) {
    const { id } = request.params;
    const donations = await DonationRepository.findByPerson(id);
    const list = await Promise.all(donations.map(async (donation) => {
      const local = await LocalRepository.findById(donation.local_id);
      return { ...donation, local };
    }));

    response.send(list);
  }

  async showByLocal(request, response) {
    const { id } = request.params;
    const donations = await DonationRepository.findByLocal(id);
    const list = await Promise.all(donations.map(async (donation) => {
      const person = await PeopleRepository.findById(donation.pessoa_id);
      return { ...donation, person };
    }));

    response.send(list);
  }

  async store(request, response) {
    const {
      pessoa_id, local_id,
    } = request.body;

    const data_doacao = new Date().toISOString();

    if (!pessoa_id) {
      return response.status(400).json({ error: 'Informe o doador' });
    }

    if (!local_id) {
      return response.status(400).json({ error: 'Informe o local' });
    }

    if (!data_doacao) {
      return response.status(400).json({ error: 'Informe a data da doação' });
    }

    const donation = await DonationRepository.create({
      pessoa_id, local_id, data_doacao,
    });

    response.send(donation);
  }

  async delete(request, response) {
    const { id } = request.params;

    await DonationRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new DonationController();
