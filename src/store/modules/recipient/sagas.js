import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import {
  loadRecipientSuccess,
  addNewRecipientSuccess,
  loadeditRecipientSuccess,
  editRecipientSuccess,
  deleteRecipientSuccess,
  refreshRecipient,
  failureRecipient,
} from './actions';

export function* loadRecipients({ payload }) {
  try {
    const { textsearch } = payload;
    const response = yield call(api.get, 'recipients', {
      params: {
        textsearch,
      },
    });

    if (response.data) {
      yield put(loadRecipientSuccess(response.data));
    }
  } catch (error) {
    toast.error(`Ocorreu um erro ao obter os dados`);
    yield put(failureRecipient(error.message));
  }
}

export function* RefreshRecipients() {
  try {
    const response = yield call(api.get, 'recipients');

    if (response.data) {
      yield put(loadRecipientSuccess(response.data));
    }
  } catch (error) {
    toast.error(`Ocorreu um erro ao obter os dados`);
    yield put(failureRecipient(error.message));
  }
}

export function* addRecipient({ payload }) {
  try {
    const { recipient } = payload;
    const response = yield call(api.post, 'recipients', recipient);

    if (response.data) {
      yield put(addNewRecipientSuccess());
      toast.success('Destinatário criado com sucesso!');
      history.push('/recipient');
    }
  } catch (error) {
    yield put(failureRecipient(error.message));
    toast.error('Falhao ao criar novo destinatário!');
  }
}
export function* loadeditRecipient({ payload }) {
  try {
    const { recipient } = payload;
    if (recipient) {
      yield put(loadeditRecipientSuccess());
    }
  } catch (error) {
    yield put(failureRecipient(error.message));
    toast.error('Erro ao obter dados!');
  }
}

export function* editRecipient({ payload }) {
  try {
    const { complement, ...rest } = payload.recipient;
    const data = Object.assign(rest, complement ? { complement } : {});

    const response = yield call(api.put, `recipients/${rest.id}`, data);

    if (response.data) {
      yield put(editRecipientSuccess());
      toast.success('Destinatário atualizado!');
      history.push('/recipient');
    }
  } catch (error) {
    yield put(failureRecipient(error.message));
    toast.error('Erro ao atualizar dados!');
  }
}
export function* deleteRecipient({ payload }) {
  try {
    const { recipient } = payload;

    const response = yield call(api.delete, `recipients/${recipient}`);
    if (response.data) {
      yield put(deleteRecipientSuccess());
      yield put(refreshRecipient());
      toast.success('Destinatário deletado');
    }
  } catch (error) {
    put(failureRecipient(error.message));
    toast.error(
      `Falha ao deletar!. verfique se este endereco está vinculado á uma entrega`
    );
  }
}

export default all([
  takeLatest('@recipient/LOAD_RECIPIENT_REQUEST', loadRecipients),
  takeLatest('@recipient/ADDNEW_RECIPIENT_REQUEST', addRecipient),
  takeLatest('@recipient/EDIT_LOAD_RECIPIENT_REQUEST', loadeditRecipient),
  takeLatest('@recipient/EDIT_RECIPIENT_REQUEST', editRecipient),
  takeLatest('@recipient/DELETE_RECIPIENT_REQUEST', deleteRecipient),
  takeLatest('@recipient/REFRESH_RECIPIENT', RefreshRecipients),
]);
