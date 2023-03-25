import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BloodCard from './components/blood-card';
import BloodDetail from './components/blood-detail';
import DonationCard from './components/donation-card';
import DonationCreate from './components/donation-create';
import DonationDetail from './components/donation-detail';
import LocalCard from './components/local-card';
import LocalCreate from './components/local-create';
import LocalDetail from './components/local-detail';
import PeopleCard from './components/people-card';
import PeopleCreate from './components/people-create';
import PeopleDetail from './components/people-detail';
import { Body, Container, Create, Sidebar } from './styles';



function App() {
  const [entidade, setEntidade] = useState('');
  const [data, setData] = useState();
  const [itemSelect, setItemSelect] = useState();

  useEffect(()=>{
    setItemSelect();
    entidade && handleSelect()
    const unsubscribe = setInterval(() => {
      if(entidade){
        handleSelect()
      }
    }, 2000);
    return () => clearInterval(unsubscribe);
  },[entidade])

  async function handleSelect(e) {
    
    const api = axios.create({
      baseURL: 'http://localhost:3000',
    });

    const {data} = await api.get(`/${entidade}`);
    setData(data.sort((a,b)=> b.created_at - a.created_at));
  }

  async function handleDelete(id){
    const api = axios.create({
      baseURL: 'http://localhost:3000',
    });

    await api.delete(`/${entidade}/${id}`);
    setItemSelect();
  }

  return (
    <Container>
      <Sidebar>
        <div>
          <label>Selecione a função desejada</label>
          <select 
            name="entidade"
            id="entidade"
            value={entidade}
            onChange={(e)=>setEntidade(e.target.value)}
            >
            <option value="">Selecione</option>
            <option value="local">Locais de Coleta</option>
            <option value="people">Pessoas</option>
            <option value="donation">Doação</option>
            <option value="blood">Banco de sangue</option>
          </select>
        </div>
      </Sidebar>
      <Create>
        {entidade === 'people' && <PeopleCreate/>}
        {entidade === 'local' && <LocalCreate  />}
        {entidade === 'donation' && <DonationCreate />}
      </Create>
      <Body>
        <label>{entidade || 'Selecione a função para exibir'}</label>
        {data && entidade && data.map(item => (
          <>
            { entidade === 'people' && <PeopleCard item={item} onClick={(res)=>setItemSelect(res)}/>}
            { entidade === 'donation' && <DonationCard item={item} onClick={(res)=>setItemSelect(res)}/>}
            { entidade === 'blood' && <BloodCard item={item} onClick={(res)=>setItemSelect(res)}/>}
            { entidade === 'local' && <LocalCard item={item} onClick={(res)=>setItemSelect(res)}/>}
          </>
        ))}
      </Body>
      {itemSelect && (
        <>
        {entidade === 'people' && <PeopleDetail item={itemSelect}/>}
        {entidade === 'local' && <LocalDetail item={itemSelect}handleDelete={handleDelete} />}
        {entidade === 'donation' && <DonationDetail item={itemSelect} handleDelete={handleDelete}/>}
        {entidade === 'blood' && <BloodDetail item={itemSelect} />}
        </>
      )}
    </Container>
  )
}

export default App;

