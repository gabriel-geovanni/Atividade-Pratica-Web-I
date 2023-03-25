import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { Container } from './styles';

function LocalDetail({item,handleDelete}) {
  return (
    <Container>
    <label>Detalhes</label>
    <div className='info'>
      <label>ID</label>
      <p>{item.id}</p>
    </div>
    <div className='info'>
      <label>Nome</label>
      <p>{item.nome}</p>
    </div>
    <div className='info'>
      <label>Endereço</label>
      <p>{item.rua + ', ' + 
      item.numero + ', ' +
      item.complemento + ' - ' +
      item.cidade + ' / ' +
      item.estado}</p>
    </div>
    <div className='info'>
      <label>Criado em</label>
      <p>{item.created_at}</p>
    </div>
    <div className='info'>
      <label>Atualizado em</label>
      <p>{item.updated_at}</p>
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

export default LocalDetail;