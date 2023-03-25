import axios from 'axios';
import React from 'react';

import { Container } from './styles';

function LocalCreate() {

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

    const res = await api.post('/local', {
      nome,rua,numero,complemento,cep
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
        <label>CEP</label>
        <input type='text' name='cep' />
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

export default LocalCreate;