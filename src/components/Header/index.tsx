import React, { useState } from 'react';
import fifa from '../../assets/fifa.png';
import { Container, IconsDiv } from './styles';

import { GrAdd } from 'react-icons/gr';
import { FaEquals } from 'react-icons/fa';
import { CadastroModal } from '../CadastroModal';
import { TotalModal } from '../TotalModal';

export function Header() {
  const [cadastro, setCadastro] = useState(false);
  const [total, setTotal] = useState(false);

  function handleCadastro() {
    setCadastro(true);
  }

  function handleTotal() {
    setTotal(true);
  }

  return (
    <Container>
      {cadastro && <CadastroModal />}
      {total && <TotalModal />}
      <img src={fifa} alt="Logo FIFA" />
      <IconsDiv>
        <button onClick={handleCadastro}>
          <GrAdd />
        </button>
        <button onClick={handleTotal}>
          <FaEquals />
        </button>
      </IconsDiv>
    </Container>
  );
}
