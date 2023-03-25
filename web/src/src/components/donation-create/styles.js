import styled from 'styled-components';

export const Container = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  label {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      label {
        font-size: 1.4rem;
        font-weight: 600;
        color: #000;
        width:100%;
        text-align: left !important;
      }
      select, input {
        display: block;
        width: 100%;
        padding: 1rem;
        font-size: 1.4rem;
        font-weight: 400;
        color: #000;
        background-color: #fff;
        border: 0px solid #000;
        box-shadow:  0 0px 2px 4px rgba(0,0,0,0.10);
        border-radius: 4px;
    
      }
    }
    button {
        display: block;
        width: 100%;
        padding: 1rem;
        font-size: 1.4rem;
        font-weight: 400;
        color: #000;
        background-color: #f5f500;
        border: 0px solid #000;
        box-shadow: 
          0 0px 2px 4px rgba(0,0,0,0.10);
        border-radius: 4px;
        margin-top: 2rem;
    }

  }
`;
