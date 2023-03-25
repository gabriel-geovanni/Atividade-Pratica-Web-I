import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { Container } from './styles';

function PeopleDetail({item}) {
  return (
    <Container>
    <label>Detalhes</label>
    <div className='info'>
      <label>Nome</label>
      <p>{item.nome}</p>
    </div>
    <div className='info'>
      <label>Documento</label>
      <p>{item.documento}</p>
    </div>
    <div className='info'>
      <label>Tipo Sanguineo</label>
      <p>{item.blood.tipo + item.blood.fator}</p>
    </div>
    <div className='info'>
      <label>Endereço</label>
      <p>{item.rua + ', ' + 
      item.numero + ', ' +
      item.complemento + ' - ' +
      item.cidade + ' / ' +
      item.estado}</p>
    </div>
    <div 
      className='info'
      onClick={()=>setitem()}
      style={{alignItems: 'flex-start'}}
      >
      <FaTrash size={20}/>
    </div>

  </Container>
  );
}

export default PeopleDetail;