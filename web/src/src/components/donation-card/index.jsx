import React from 'react';

import { Container } from './styles';

function DonationCard({item, onClick}) {
  return (
    <Container key={item.id} onClick={()=> onClick(item)}>
      <div className='info'>
        <h1>Data da doação</h1>
        <h2>{item.data_doacao}</h2>
      </div>
      <div className='info'>
        <h1>Quantidade</h1>
        <h2>{item.quantidade}</h2>
      </div>
    </Container>
  );
}

export default DonationCard;