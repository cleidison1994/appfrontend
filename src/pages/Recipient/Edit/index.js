import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { MdDone, MdArrowForward } from 'react-icons/md';
import * as Yup from 'yup';
import { editRecipientRequest } from '~/store/modules/recipient/actions';
import history from '~/services/history';

import Input from '~/components/Input';
import { Container, FormHeader, FormContent } from './styles';

export default function EditRecipient() {
  const ref = useRef(null);
  const loading = useSelector((state) => state.recipient.loading);
  const dispatch = useDispatch();
  const recipientData = useSelector((state) => state.recipient.recipientEdit);

  async function hanleEditRecipient(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        zip_code: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.tron.log(data);
      dispatch(editRecipientRequest(data));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        ref.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form ref={ref} initialData={recipientData} onSubmit={hanleEditRecipient}>
        <FormHeader>
          <span>Cadastro de destinatário</span>
          <div>
            <button type="button" onClick={() => history.push('/recipient')}>
              <MdArrowForward size={20} color="#FFF" />
              <span>VOLTAR</span>
            </button>
            <button type="submit">
              <MdDone size={20} color="#FFF" />
              {loading ? <span>EDITANDO...</span> : <span>EDITAR</span>}
            </button>
          </div>
        </FormHeader>
        <FormContent>
          <div className="Name">
            <span>Nome</span>
            <Input hidden name="id" />
            <Input name="name" type="text" placeholder="Nome do destinatário" />
          </div>
          <div className="location">
            <div className="Street">
              <span>Rua</span>
              <Input name="street" placeholder="Nome da rua" />
            </div>
            <div>
              <span>Numero</span>
              <Input name="number" placeholder="Numero" />
            </div>
            <div>
              <span>Complemento</span>
              <Input name="complement" placeholder="Complemento" />
            </div>
          </div>
          <div className="place">
            <div>
              <span>Cidade</span>
              <Input name="city" placeholder="Nome da cidade" />
            </div>
            <div>
              <span>Estado</span>
              <Input name="state" placeholder="Nome do estado" />
            </div>
            <div>
              <span>CEP</span>
              <Input name="zip_code" placeholder="00.000-000" />
            </div>
          </div>
        </FormContent>
      </Form>
    </Container>
  );
}
