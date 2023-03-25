import React from 'react';

import { Container } from './styles';



function LocalCard({item, onClick}) {
  return (
    <Container key={item.id} onClick={()=>onClick(item)}>
      <div className='info'>
        <h1>Nome</h1>
        <h2>{item.nome}</h2>
      </div>
      <div className='info'>
        <h1>Local</h1>
        <h2>{item.cidade + ' / ' + item.estado}</h2>
      </div>
    </Container>
  );
}

export default LocalCard;