import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function PessoaCreate() {
  const [tipo, setTipo] = useState([]);

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      async function load() {
        const api = axios.create({
          baseURL: 'http://localhost:3000',
        });
  
        const bloods = await api.get('/blood');
        setTipo(bloods.data);
      }
      load();
    }, 2000);

    return ()=> clearInterval(unsubscribe)
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
    const api = axios.create({
      baseURL: 'http://localhost:3000',
    });
    const data = new FormData(e.target);
    const nome = data.get('nome');
    const rua = data.get('rua');
    const numero = data.get('numero');
    const complemento = data.get('complemento');
    const cep = data.get('cep');
    const tipo_id = data.get('tipo_id');
    const documento = data.get('documento')

    const res = await api.post('/people', {
      nome,rua,numero,complemento,cep, tipo_id,documento
    });
    console.log(res)
  }
  

  return (
    <Container>
      <label>Cadastrar um novo local de coleta</label>
     <form onSubmit={handleSubmit}
     >
      <div className='info'>
        <label>Nome</label>
        <input type='text' name='nome' />
      </div>
      <div className='info'>
        <label>Rua</label>
        <input type='text' name='rua' />
      </div>
      <div className='info'>
        <label>Numero</label>
        <input type='text' name='numero' />
      </div>
      <div className='info'>
        <label>Complemento</label>
        <input type='text' name='complemento' />
      </div>
      <div className='info'>
        <label>Documento</label>
        <input type='text' name='documento' />
      </div>
      <div className='info'>
        <label>CEP</label>
        <input type='text' name='cep' />
      </div>
      <div className='info'>
        <label>Tipo sanguineo</label>
        <select name='tipo_id'>
          <option value={''}>Selecione um tipo sanguineo</option>
          {tipo.map((item) => (
            <option value={item.id}>{item.tipo + item.fator}</option>
          ))}
        </select>
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

export default PessoaCreate;