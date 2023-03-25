import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'sidebar body detail'
    'create body detail'
    'create body detail';
  height: calc(100vh);
  width: calc(100vw);
  background-color: #f0f0f5;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 1rem;
  color: #000;
  font-size: 1rem;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  border-radius: 4px;
  gap: 1rem;
  div {
    display: flex;
    padding: 1rem;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    
    label {
      display: block;
      font-size: 2rem;
      font-weight: 600;
      color: #000;
      background-color: #fff;
      padding: 0 1rem 1rem 0rem;
      text-align: center;
    }
  
    select {
      display: block;
      width: 100%;
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: #000;
      background-color: #fff;
      border: 0px solid #000;
      box-shadow: 
        0 0px 2px 4px rgba(0,0,0,0.10);
      border-radius: 4px;
      margin-bottom: 1rem;
      margin-top: 1rem;
      
    }
  }
`;
export const Create = styled.div`
  grid-area: create;
  border-radius: 4px;
  gap: 1rem;
  div {
    display: flex;
    padding: 1rem;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    
    label {
      display: block;
      font-size: 2rem;
      font-weight: 600;
      color: #000;
      background-color: #fff;
      padding: 0 1rem 1rem 0rem;
      text-align: center;
    }
  
    select {
      display: block;
      width: 100%;
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: #000;
      background-color: #fff;
      border: 0px solid #000;
      box-shadow: 
        0 0px 2px 4px rgba(0,0,0,0.10);
      border-radius: 4px;
      margin-bottom: 1rem;
      margin-top: 1rem;
      
    }
  }
`;

export const Body = styled.div`
  grid-area: body;
  display:flex;
  flex-direction: column;
  gap: 1rem;
  label {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    background-color: #fff;
    padding: 1rem;
    text-align: center;
  }

  .people {
    display: flex;
    flex-direction:row;
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    border: 0px solid #000;
    box-shadow: 
      0 0px 2px 4px rgba(0,0,0,0.05);
    border-radius: 4px;
    height: 50px;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;

      h1 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #000;
      }

      h2 {
        font-size: 1.2rem;
        font-weight: 400;
        color: #000;
      }
    }
  }

`;

export const Detail = styled.div`
  grid-area: detail;
  display:flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  label {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 1rem;
    label {
      font-size: 1.4rem;
      font-weight: 600;
      color: #000;
      width:100%;
      text-align: left !important;
    }
    p {
      width: 100%;
      font-size: 1.4rem;
      font-weight: 400;
      color: #000;
      background-color: #fff;
      border-bottom: 1px solid #000;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
  }
`;



