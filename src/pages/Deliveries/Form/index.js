import React, { useState } from 'react';
import { MdCheck, MdArrowForward } from 'react-icons/md';

import {
  Container,
  ContentHeader,
  SelectContainer,
  Select,
  FormContainer,
  NewDeliveryForm,
} from './styles';
import api from '~/services/api';

export default function FormDelivery() {
  const [deliverymanName, setDeliverymanName] = useState([]);
  const [recipientName, setRecipientName] = useState([]);
  const [productName, setProductName] = useState('');

  async function loadOptionsDeliverymen(inputValue, callback) {
    const response = await api.get('/deliveryman');

    const data = response.data.map((deliveryman) => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }
  async function loadOptionsRecipients(inputValue, callback) {
    const response = await api.get('/recipients');

    const data = response.data.map((recipient) => ({
      value: recipient.id,
      label: recipient.name,
    }));

    console.log(deliverymanName);
    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }
  return (
    <Container>
      <ContentHeader>
        <span>Cadastro de encomendas</span>
        <div>
          <button type="button">
            <MdArrowForward size={25} color="#fff" />
            <span>VOLTAR</span>
          </button>
          <button type="button">
            <MdCheck size={25} color="#fff" />
            <span>SALVAR</span>
          </button>
        </div>
      </ContentHeader>
      <NewDeliveryForm>
        <SelectContainer>
          <div>
            <span>Destinatário</span>
            <Select
              cacheOptions
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              defaultOptions
              loadOptions={loadOptionsRecipients}
              onChange={() => {}}
            />
          </div>
          <div>
            <span>Entregador</span>
            <Select
              cacheOptions
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              defaultOptions
              loadOptions={loadOptionsDeliverymen}
              onChange={(option) => setDeliverymanName(option)}
            />
          </div>
        </SelectContainer>
        <FormContainer>
          <span>Nome do Produto</span>
          <input type="text" placeholder="Digite o nome do produto" />
        </FormContainer>
      </NewDeliveryForm>
    </Container>
  );
}
