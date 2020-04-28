import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { MdDone, MdArrowForward } from 'react-icons/md';
import { Form } from '@unform/web';
import Input from '~/components/Input';
import history from '~/services/history';
import { EditDeliveryManRequest } from '~/store/modules/deliveryman/actions';
import Avatar from '../Avatar';
import { Container, ContentHeader, ContentForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome não pode ser vazio!'),
  email: Yup.string().email().required('Email não pode ser vazio!'),
});

export default function EditDeliveryMan() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.deliveryman.loading);
  const deliverymanData = useSelector(
    (state) => state.deliveryman.deliverymanEdit
  );

  async function handleAddDeliveryMan(data) {
    await dispatch(EditDeliveryManRequest(data));
  }

  return (
    <Container>
      <Form
        initialData={deliverymanData}
        onSubmit={handleAddDeliveryMan}
        schema={schema}
        ref={ref}
      >
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
            <Avatar name=" avatar_id" />
          </div>
          <div>
            <Input name="id" hidden />
            <span>Nome</span>
            <Input name="name" type="text" placeholder="Digite um nome" />
            <span>Email</span>
            <Input name="email" type="email" placeholder="Digite um email" />
          </div>
        </ContentForm>
      </Form>
    </Container>
  );
}
