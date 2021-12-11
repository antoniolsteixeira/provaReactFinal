import React, { useEffect, useState } from 'react';
import { Cadastro } from './styles';

import api from '../../services/api';
import { DetalhesModal } from '../DetalhesModal';

interface Cadastro {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

export function Dashboard() {
  const [cadastro, setCadastro] = useState<Cadastro[]>();

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setCadastro(response.data);
    });
  }, [cadastro]);

  function deleteCadastro(id: string) {
    api.delete(`/worldcup/${id}`);
  }

  const [detalhesModal, setDetalhesModal] = useState(false);

  const [paisDetalhes, setPaisDetalhes] = useState('');

  return (
    <Cadastro>
      {detalhesModal && <DetalhesModal pais={paisDetalhes} />}

      <ul>
        {cadastro
          ? cadastro.map((cadastroMap) => (
              <li key={cadastroMap.id}>
                <span>
                  Ano da Copa Mundo: <strong>{cadastroMap.ano}</strong>
                </span>
                <span>
                  Sede da Copa do Mundo: <strong>{cadastroMap.sede}</strong>
                </span>
                <span>
                  Campeão Mundial: <strong>{cadastroMap.campeao}</strong>
                </span>
                <div>
                  <button
                    onClick={() => {
                      setDetalhesModal(true);
                      setPaisDetalhes(cadastroMap.campeao);
                      console.log('teste');
                    }}
                  >
                    Detalhes
                  </button>
                  <button
                    onClick={() => {
                      deleteCadastro(cadastroMap.id);
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))
          : ''}
      </ul>
    </Cadastro>
  );
}

export default Dashboard;
