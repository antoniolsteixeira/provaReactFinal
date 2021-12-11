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

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
`;

export const Form = styled.form`
  justify-content: center;

  width: 500px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  input {
    border: 2px solid;
    margin-top: 2px;
    ::placeholder {
      color: #4983b0;
    }
    padding: 5px;
  }
  button {
    margin: 0 auto;
    margin-top: 10px;
    background-color: #4983b0;
    border-radius: 5px;
    border: 2px solid;
    width: 100px;
  }
`;
