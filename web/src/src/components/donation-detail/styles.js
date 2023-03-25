import styled from 'styled-components';

export const Container = styled.div`
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
