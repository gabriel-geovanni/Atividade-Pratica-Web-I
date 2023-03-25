import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { Container } from './styles';

function DonationDetail({item,handleDelete}) {
  return (
    <Container>
    <label>Detalhes</label>
    <div className='info'>
      <label>Cliente</label>
      <p>{item.pessoa_id}</p>
    </div>
    <div className='info'>
      <label>Local</label>
      <p>{item.local_id}</p>
    </div>
    <div className='info'>
      <label>Data</label>
      <p>{item.data_doacao}</p>
    </div>
    <div className='info'>
      <label>Quantidade</label>
      <p>{item.quantidade}</p>
    </div>
    <div className='info'>
      <label>Data criação</label>
      <p>{item.created_at}</p>
    </div>
    <div 
      className='info'
      onClick={()=>handleDelete(item.id)}
      style={{alignItems: 'flex-start'}}
      >
      <FaTrash size={20}/>
    </div>

  </Container>
  );
}

export default DonationDetail;