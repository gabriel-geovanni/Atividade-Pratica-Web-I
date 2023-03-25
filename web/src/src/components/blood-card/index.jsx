import React from 'react';

import { Container } from './styles';

function BloodCard({item, onClick}) {
  return (
    <Container key={item.id} onClick={()=>onClick(item)}>
      <div className='info'>
        <h1>Tipo</h1>
        <h2>{item.tipo + item.fator}</h2>
      </div>
      <div className='info'>
        <h1>Quantidade</h1>
        <h2>{item.quantidade}</h2>
      </div>
    </Container>
  );
}

export default BloodCard;