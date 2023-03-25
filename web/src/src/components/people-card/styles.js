import styled from 'styled-components';

export const Container = styled.div`
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
`;
