import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { BackgroundModal, Container, BttVoltar, Tabela, Title } from './styles';

interface CampeaoDetails {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

interface Props {
  pais: string;
}

export function DetalhesModal({ pais, ...rest }: Props) {
  let campeaoFilter;
  const [campeao, setCampeao] = useState<CampeaoDetails[]>();

  const [modal, closeModal] = useState(false);

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setCampeao(response.data);
    });
  }, []);

  if (campeao) {
    campeaoFilter = [];
    campeaoFilter = campeao.filter(
      (campeaofiltro) => campeaofiltro.campeao === pais,
    );
  }

  function handleCloseModal() {
    window.location.reload();
  }

  return (
    <BackgroundModal {...rest}>
      <Container>
        <BttVoltar>
          <button onClick={handleCloseModal}>Voltar</button>
        </BttVoltar>

        <h1>Pais: {pais}</h1>

        <Title>Campeão Mundial: </Title>
        <Tabela>
          <ul>
            {campeaoFilter ? (
              campeaoFilter.map((pais) => (
                <li key={pais.campeao}>
                  <span>
                    <strong>{pais.ano}</strong>
                  </span>
                </li>
              ))
            ) : (
              <h1>Não foi encontrado o ano em que este pais foi campeão !</h1>
            )}
          </ul>
        </Tabela>
      </Container>
    </BackgroundModal>
  );
}
