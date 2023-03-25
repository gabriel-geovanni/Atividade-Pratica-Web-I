import React from 'react';

import { Container } from './styles';

function BloodDetail({item}) {
  return (
    <Container>
    <label>Detalhes</label>
    <div className='info'>
      <label>id</label>
      <p>{item.id}</p>
    </div>
    <div className='info'>
      <label>Tipo</label>
      <p>{String(item.tipo)}</p>
    </div>
    <div className='info'>
      <label>Fator</label>
      <p>{item.fator}</p>
    </div>
    <div className='info'>
      <label>Quantidade</label>
      <p>{item.quantidade}</p>
    </div>
  </Container>
  );
}

export default BloodDetail;