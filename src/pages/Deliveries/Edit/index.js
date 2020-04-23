/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdCheck, MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import {
  Container,
  ContentHeader,
  SelectContainer,
  Select,
  FormContainer,
  NewDeliveryForm,
} from './styles';

export default function EditDelivery() {
  const [deliveryman_id, setDeliveryMan] = useState('');
  const [recipient_id, setRecipient] = useState('');
  const [product, setProduct] = useState('');

  const loading = useSelector((state) => state.delivery.loading);
  const deliveryEdit = useSelector((state) => state.delivery.delivery);

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
  async function handleEditDelivery() {
    try {
      if (!(product || deliveryman_id || recipient_id)) {
        toast.error('Não é possivel atualizar os campos vazios');
        return;
      }
      const data = Object.assign(
        product ? { product } : {},
        deliveryman_id ? { deliveryman_id } : {},
        recipient_id ? { recipient_id } : {}
      );

      const response = await api.put(
        `delivery/${deliveryEdit ? deliveryEdit.id : null}`,
        data
      );
      if (response) {
        toast.success('Encomenda alterada');
        history.push('/delivery');
      }
    } catch (error) {
      toast.error('Ocorreu um erro verifique os campos');
    }
  }

  return (
    <Container>
      <ContentHeader>
        <span>Edição de encomendas</span>
        <div>
          <button type="button" onClick={() => history.push('/delivery')}>
            <MdArrowForward size={25} color="#fff" />
            <span>VOLTAR</span>
          </button>
          <button type="button" onClick={handleEditDelivery}>
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
              placeholder={
                deliveryEdit
                  ? deliveryEdit.recipients.name
                  : 'Selecione um destinatário'
              }
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
              placeholder={
                deliveryEdit
                  ? deliveryEdit.deliveryman.name
                  : 'Selecione um entregador '
              }
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
            placeholder={
              deliveryEdit ? deliveryEdit.product : 'Digite o nome do produto'
            }
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </FormContainer>
      </NewDeliveryForm>
    </Container>
  );
}
