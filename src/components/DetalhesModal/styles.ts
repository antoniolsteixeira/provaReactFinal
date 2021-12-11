import styled from 'styled-components';

export const BackgroundModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const Container = styled.div`
  background-color: #002080;
  margin: auto;
  padding: 20px;
  border: 1px solid #4983b0;
  width: 40%;
`;

export const BttVoltar = styled.div`
  a {
    margin-top: 15px;

    font-size: 18px;
    text-decoration: none;

    color: #4983b0;

    border: 2px dashed #4983b0;

    padding: 5px;
  }
`;

export const Title = styled.h1`
  color: #4983b0;

  font-size: 35px;
  margin-left: 55px;
`;

export const Tabela = styled.div`
  margin: 0 auto;
  width: 80px;

  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;

    border: 2px dashed black;

    background-color: #f8f8ff;

    color: #4983b0;

    margin-top: 10px;

    strong {
      color: #4983b0;
    }
  }

  input {
    width: 320px;
  }

  div {
    display: flex;
    flex-direction: row;

    h1 {
      margin-left: 3px;
    }
  }
`;
