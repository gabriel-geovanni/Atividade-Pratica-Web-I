import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function DonationCreate() {
  const [clientes, setClientes] = useState([]);
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function load() {
      const api = axios.create({
        baseURL: 'http://localhost:3000',
      });

      const [pessoas, locais] = await Promise.all([
        await api.get('/people'),
        await api.get('/local'),
      ]);
      setClientes(pessoas.data);
      setLocais(locais.data)
    }
    load();
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
    const api = axios.create({
      baseURL: 'http://localhost:3000',
    });
    const data = new FormData(e.target);
    const pessoa_id = data.get('pessoa_id');
    const local_id = data.get('local_id');
    const quantidade = data.get('quantidade');
    console.log({pessoa_id, local_id, quantidade})
    const res = await api.post('/donation', {pessoa_id, local_id, quantidade});
    console.log(res)
  }
  

  return (
    <Container>
      <label>Cadastrar nova Doação</label>
     <form onSubmit={handleSubmit}
     >
      <div className='info'>
        <label>Cliente</label>
        <select name='pessoa_id'>
          <option value={''}>Selecione um cliente</option>
          {clientes.map((item) => (
            <option value={item.id}>{item.nome}</option>
          ))}
        </select>
      </div>
      <div className='info'>
        <label>Local</label>
        <select name='local_id'>
          <option value={''}>Selecione um local de coleta</option>
          {locais.map((item) => (
            <option value={item.id}>{item.nome}</option>
          ))}
        </select>
      </div>
      <div className='info'>
        <label>Quantidade (mls)</label>
        <input type='text' name='quantidade' />
      </div>
      <button 
        type='submit'
        >
        Cadastrar
      </button>
     </form>


  </Container>
  );
}

export default DonationCreate;