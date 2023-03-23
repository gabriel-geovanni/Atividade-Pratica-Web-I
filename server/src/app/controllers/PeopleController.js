const { default: axios } = require('axios');
const https = require('https');
const crypto = require('crypto');
const PeopleRepository = require('../repositories/PeopleRepository');
const BloodRepository = require('../repositories/BloodRepository');

class PeopleController {
  async index(request, response) {
    const { orderBy } = request.query;
    const people = await PeopleRepository.findAll(orderBy);
    const list = await Promise.all(people.map(async (person) => {
      const blood = await BloodRepository.findById(person.tipo_id);
      return { ...person, blood };
    }));

    response.send(list);
  }

  async showByDoc(request, response) {
    const { documento } = request.params;
    const person = await PeopleRepository.findByDoc(documento);

    if (!person) {
      return response.status(404).json({ error: 'Pessoa não encontrada' });
    }

    const blood = await BloodRepository.findById(person.tipo_id);

    response.send({ ...person, blood });
  }

  async showByName(request, response) {
    const { nome } = request.params;
    const people = await PeopleRepository.findByName(nome);

    if (!people) {
      return response.status(404).json({ error: 'Pessoa não encontrada' });
    }

    const list = await Promise.all(people.map(async (person) => {
      const blood = await BloodRepository.findById(person.tipo_id);
      return { ...person, blood };
    }));

    response.send(list);
  }

  async store(request, response) {
    const {
      nome, rua, numero, complemento, documento, cidade_id, tipo_id,
    } = request.body;

    if (!nome) {
      return response.status(400).json({ error: 'Digite nome do doador' });
    }

    if (!rua) {
      return response.status(400).json({ error: 'Digite o nome da rua' });
    }

    if (!numero) {
      return response.status(400).json({ error: 'Digite o numero da residência' });
    }

    if (!documento) {
      return response.status(400).json({ error: 'Informe o numero do documento' });
    }

    if (!cidade_id) {
      return response.status(400).json({ error: 'Selecione uma cidade de atendimento' });
    }

    if (!tipo_id) {
      return response.status(400).json({ error: 'Informe o tipo sanguíneo' });
    }

    const docExists = await PeopleRepository.findByDoc(documento);
    if (docExists) {
      return response.status(400).json({ error: 'Documento já cadastrado' });
    }

    const api = axios.create({
      httpsAgent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
      }),
    });

    const { data } = await api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidade_id}`);

    if (!data.nome) {
      return response.status(400).json({ error: 'Cidade não encontrada' });
    }

    const cidade = data.nome;
    const estado = data.microrregiao.mesorregiao.UF.sigla;

    const person = await PeopleRepository.create({
      nome,
      rua,
      numero,
      complemento,
      documento,
      cidade,
      estado,
      tipo_id,
    });
    response.send(person);
  }

  async update(request, response) {
    const {
      id, nome, rua, numero, complemento, cidade_id,
    } = request.body;

    const updated_at = new Date().toISOString();

    const personExists = await PeopleRepository.findById(id);
    if (!personExists) {
      return response.status(400).json({ error: 'Essa pessoa não está registrada' });
    }

    if (!nome) {
      return response.status(400).json({ error: 'Esse campo não pode ser nulo' });
    }

    if (!rua) {
      return response.status(400).json({ error: 'Esse campo não pode ser nulo' });
    }

    if (!numero) {
      return response.status(400).json({ error: 'Esse campo não pode ser nulo' });
    }

    if (!cidade_id) {
      return response.status(400).json({ error: 'Esse campo não pode ser nulo' });
    }

    if (!updated_at) {
      return response.status(400).json({ error: 'Esse campo não pode ser nulo' });
    }

    const api = axios.create({
      httpsAgent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
      }),
    });

    const { data } = await api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidade_id}`);

    if (!data.nome) {
      return response.status(400).json({ error: 'Cidade não encontrada' });
    }

    const cidade = data.nome;
    const estado = data.microrregiao.mesorregiao.UF.sigla;

    const person = await PeopleRepository.update(id, {
      nome, rua, numero, complemento, cidade, estado, updated_at,
    });

    response.send(person);
  }

  async delete(request, response) {
    const { id } = request.params;

    await PeopleRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new PeopleController();
