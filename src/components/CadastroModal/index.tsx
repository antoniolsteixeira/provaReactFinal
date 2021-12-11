import React from 'react';
import api from '../../services/api';
import { BackgroundModal, Container, Form, Title } from './styles';

export function CadastroModal() {
  async function handleAddEvent(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const novoCadastro = {
      ano: form.ano.value,
      sede: form.sede.value,
      campeao: form.campeao.value,
    };

    await api.post('worldcup', novoCadastro);
    form.reset();
    window.location.reload();
  }

  return (
    <BackgroundModal>
      <Container>
        <Title>Cadastrar</Title>

        <Form onSubmit={handleAddEvent}>
          <input type="text" name="ano" placeholder="Ano da Copa Mundo" />
          <input type="text" name="sede" placeholder="Sede da Copa do Mundo" />
          <input type="text" name="campeao" placeholder="Campeão Mundial" />
          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
    </BackgroundModal>
  );
}
