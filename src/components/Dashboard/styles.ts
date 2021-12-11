import styled from 'styled-components';

export const Cadastro = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  width: 500px;
  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 2px dashed black;
    background-color: #f8f8ff;
    color: #4983b0;
    margin-top: 10px;
    strong {
      color: black;
    }
  }
  input {
    width: 320px;
  }
  a {
    background: #4983b0;
    text-decoration: none;
    margin-top: 7px;
    width: 60px;
    padding: 5px;
    a:hover {
      background-color: #4983b0;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    h1 {
      margin-left: 3px;
    }
    button {
      margin-top: 4px;
      font-size: 13px;
      padding: 5px;
      background-color: #4983b0;
      border-radius: 5px;
      border: 2px dashed;
      width: 70px;
      & + button {
        margin-left: 10px;
      }
    }
  }
`;
