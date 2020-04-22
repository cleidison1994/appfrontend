import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCheck, MdArrowForward } from 'react-icons/md';
import { newDeliveryRequest } from '~/store/modules/delivery/actions';
import history from '~/services/history';
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
  const dispatch = useDispatch();
  const [deliveryman_id, setDeliveryMan] = useState([]);
  const [recipient_id, setRecipient] = useState([]);
  const [product, setProduct] = useState('');

  const loading = useSelector((state) => state.delivery.loading);

  async function loadOptionsDeliverymen(inputValue, callback) {
    const response = await api.get('/deliveryman');

    const data = response.data.map((d) => ({
      value: d.id,
      label: d.name,
    }));

    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }
  async function loadOptionsRecipients(inputValue, callback) {
    const response = await api.get('/recipients');

    const data = response.data.map((r) => ({
      value: r.id,
      label: r.name,
    }));
    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }

  function getSelectRecipient({ value }) {
    setRecipient(value);
  }
  function getSelectDeliveryMan({ value }) {
    setDeliveryMan(value);
  }
  async function handleSaveDelivery() {
    dispatch(newDeliveryRequest(deliveryman_id, recipient_id, product));
  }

  return (
    <Container>
      <ContentHeader>
        <span>Cadastro de encomendas</span>
        <div>
          <button type="button" onClick={() => history.push('/delivery')}>
            <MdArrowForward size={25} color="#fff" />
            <span>VOLTAR</span>
          </button>
          <button type="button" onClick={handleSaveDelivery}>
            <MdCheck size={25} color="#fff" />
            {loading ? <span>SALVANDO...</span> : <span>SALVAR</span>}
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
              onChange={(option) => getSelectRecipient(option)}
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
              onChange={(option) => getSelectDeliveryMan(option)}
            />
          </div>
        </SelectContainer>
        <FormContainer>
          <span>Nome do Produto</span>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </FormContainer>
      </NewDeliveryForm>
    </Container>
  );
}
