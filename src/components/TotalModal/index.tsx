import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { BackgroundModal, Container, BttVoltar, Tabela, Title } from './styles';

interface CampeaoDetails {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

export function TotalModal() {
  let campeaoFilter;
  const [campeao, setCampeao] = useState<CampeaoDetails[]>();

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setCampeao(response.data);
    });
  }, []);

  if (campeao) {
    campeaoFilter = [];
    campeaoFilter = campeao.filter(
      (campeaofiltro) =>
        campeaofiltro.campeao === 'Brasil' ||
        'Italia' ||
        'Alemanha' ||
        'França',
    );
  }

  function handleCloseModal() {
    window.location.reload();
  }

  return (
    <BackgroundModal>
      <Container>
        <BttVoltar>
          <button onClick={handleCloseModal}>Voltar</button>
        </BttVoltar>

        <Title>Campeão Mundial: </Title>
        <Tabela>
          <ul>
            {campeaoFilter ? (
              campeaoFilter.map((pais) => (
                <li key={pais.campeao}>
                  <span>
                    <strong>
                      {pais.campeao} {'\n'}
                    </strong>
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
