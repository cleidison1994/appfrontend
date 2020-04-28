import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MdDone, MdArrowForward } from 'react-icons/md';
import { Form } from '@unform/web';
import Input from '~/components/Input';
import history from '~/services/history';
import { addNewDeliveryManRequest } from '~/store/modules/deliveryman/actions';
import Avatar from '../Avatar';
import { Container, ContentHeader, ContentForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email().required('Email é obrigatório'),
});

export default function NewDeliveryManForm() {
  const [namedeliveryman, setNameDelliveryMan] = useState('');
  const [emaildeliveryman, setEmailDeliveryMan] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.deliveryman.loading);
  const ref = useRef(null);

  async function handleAddDeliveryMan({ name, email, avatar_id }) {
    const data = { name, email, avatar_id };
    dispatch(addNewDeliveryManRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleAddDeliveryMan} ref={ref}>
        <ContentHeader>
          <div>
            <span>Cadastro de entregadores</span>
          </div>
          <div>
            <button type="button" onClick={() => history.push('/deliveryman')}>
              <MdArrowForward size={20} color="#FFF" />
              <span>VOLTAR</span>
            </button>
            <button type="submit">
              <MdDone size={20} color="#FFF" />
              {loading ? <span>SALVANDO...</span> : <span>SALVAR</span>}
            </button>
          </div>
        </ContentHeader>
        <ContentForm>
          <div>
            <Avatar name="avatar_id" />
          </div>
          <div>
            <span>Nome</span>
            <Input
              name="name"
              type="text"
              placeholder="Digite um nome"
              value={namedeliveryman}
              onChange={(e) => setNameDelliveryMan(e.target.value)}
            />
            <span>Email</span>
            <Input
              name="email"
              type="email"
              placeholder="Digite um email"
              value={emaildeliveryman}
              onChange={(e) => setEmailDeliveryMan(e.target.value)}
            />
          </div>
        </ContentForm>
      </Form>
    </Container>
  );
}
