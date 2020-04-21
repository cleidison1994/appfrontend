import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { loadDeliverySuccess, loadNotFound } from './actions';

export function* loadDeliveries({ payload }) {
  try {
    const { textsearch } = payload;

    const response = yield call(api.get, 'delivery', {
      params: {
        textsearch,
      },
    });
    if (!response) {
      toast.error('Nenhum registo encontrado !');
      return;
    }
    yield put(loadDeliverySuccess(response.data));
  } catch (err) {
    toast.error('Falha na autenticação');
    yield put(loadNotFound());
  }
}

export default all([takeLatest('@delivery/LOAD_REQUEST', loadDeliveries)]);
