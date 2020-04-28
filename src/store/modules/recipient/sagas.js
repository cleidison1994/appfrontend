import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import {
  loadRecipientSuccess,
  addNewRecipientSuccess,
  loadeditRecipientSuccess,
  editRecipientSuccess,
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
    const { recipient } = payload;

    console.tron.log(recipient);
    // const response = yield call(api.get, `recipients/${id}`, data);

    // if (response.data) {
    yield put(editRecipientSuccess());
    // }
  } catch (error) {
    yield put(failureRecipient(error.message));
    toast.error('Erro ao atualizar dados!');
  }
}

export default all([
  takeLatest('@recipient/LOAD_RECIPIENT_REQUEST', loadRecipients),
  takeLatest('@recipient/ADDNEW_RECIPIENT_REQUEST', addRecipient),
  takeLatest('@recipient/EDIT_LOAD_RECIPIENT_REQUEST', loadeditRecipient),
  takeLatest('@recipient/EDIT_RECIPIENT_REQUEST', editRecipient),
]);
