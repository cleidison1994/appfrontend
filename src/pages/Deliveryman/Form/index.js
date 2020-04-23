import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDone, MdArrowForward } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { addNewDeliveryManRequest } from '~/store/modules/deliveryman/actions';
import Avatar from '../Avatar';
import { Container, Content, ContentHeader, ContentForm } from './styles';

export default function NewDeliveryManForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  function handleAddDeliveryMan() {
    const data = { name, email };

    dispatch(addNewDeliveryManRequest(data));
  }
  return (
    <Container>
      <Content>
        <ContentHeader>
          <div>
            <span>Cadastro de entregadores</span>
          </div>
          <div>
            <button type="button">
              <MdArrowForward size={20} color="#FFF" />
              <span>VOLTAR</span>
            </button>
            <button type="submit" onClick={handleAddDeliveryMan}>
              <MdDone size={20} color="#FFF" />
              <span>SALVAR</span>
            </button>
          </div>
        </ContentHeader>
        <ContentForm>
          <div>
            <Avatar name="avatar_id" />
          </div>
          <Form>
            <span>Nome</span>
            <Input
              name="name"
              placeholder="Digite um nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Email</span>
            <Input
              name="email"
              placeholder="Digite um email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form>
        </ContentForm>
      </Content>
    </Container>
  );
}
