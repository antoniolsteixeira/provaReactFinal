import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;

  img {
    width: 100px;
    height: 50px;
  }
`;

export const IconsDiv = styled.div`
  margin-left: 50px;

  button {
    background: none;
    border: none;

    p {
      color: #262626;
    }

    svg {
      color: #262626;
    }

    & + button {
      margin-left: 5px;
    }
  }
`;
