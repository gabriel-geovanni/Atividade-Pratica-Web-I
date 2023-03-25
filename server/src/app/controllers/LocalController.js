const { default: axios } = require('axios');
const https = require('https');
const crypto = require('crypto');
const LocalRepository = require('../repositories/LocalRepository');

class LocalController {
  async index(request, response) {
    const { orderBy } = request.query;
    const local = await LocalRepository.findAll(orderBy);

    response.send(local);
  }

  async showByName(request, response) {
    const { nome } = request.params;
    const locations = await LocalRepository.findByName(nome);

    response.send(locations);
  }

  async showByCity(request, response) {
    const { cidade } = request.params;
    const locations = await LocalRepository.findByCity(cidade);

    response.send(locations);
  }

  async showByState(request, response) {
    const { estado } = request.params;
    const locations = await LocalRepository.findByState(estado);

    response.send(locations);
  }

  async store(request, response) {
    const {
      nome, rua, numero, complemento, cep,
    } = request.body;
    console.log('aqui', request.body)
    if (!nome) {
      return response.status(400).json({ error: 'Digite nome da unidade' });
    }

    if (!rua) {
      return response.status(400).json({ error: 'Digite o nome da rua' });
    }

    if (!numero) {
      return response.status(400).json({ error: 'Digite o numero da unidade' });
    }
    console.log('aqui2')
    const adressExists = await LocalRepository.findByAdress(rua, numero);
    if (adressExists) {
      return response.status(400).json({ error: 'Já existe um posto de doação nesse endereço' });
    }
    console.log('aqui3')

    const api = axios.create({
      httpsAgent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
      }),
    });

    const { data } = await api.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (!data.localidade) {
      return response.status(400).json({ error: 'Cidade não encontrada' });
    }

    const cidade = data.localidade;
    const estado = data.uf;

    const local = await LocalRepository.create({
      nome, rua, numero, complemento, cidade, estado,
    });

    response.send(local);
  }

  async update(request, response) {
    const {
      id, nome, rua, numero, complemento, cidade_id,
    } = request.body;

    const updated_at = new Date().toISOString();

    if (!id) {
      return response.status(400).json({ error: 'Digite o id da unidade' });
    }

    const localExists = await LocalRepository.findById(id);
    if (!localExists) {
      return response.status(400).json({ error: 'Unidade não registrada' });
    }

    if (!nome) {
      return response.status(400).json({ error: 'Digite o nome da unidade' });
    }

    if (!rua) {
      return response.status(400).json({ error: 'Digite o nome da rua' });
    }

    if (!numero) {
      return response.status(400).json({ error: 'Digite o numero da unidade' });
    }

    if (!cidade_id) {
      return response.status(400).json({ error: 'Selecione uma cidade de atendimento' });
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

    const local = await LocalRepository.update(id, {
      nome, rua, numero, complemento, cidade, estado, updated_at,
    });

    response.send(local);
  }

  async delete(request, response) {
    const { id } = request.params;

    await LocalRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new LocalController();
