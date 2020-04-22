import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadDeliverySuccess,
  loadNotFound,
  newDeliverySuccess,
  detailsDeliverySuccess,
} from './actions';

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
export function* newAddDelivery({ payload }) {
  try {
    const { deliveryman_id, recipient_id, product } = payload;

    if (!(deliveryman_id || recipient_id, product || product)) {
      toast.error('Verifique os campos todos devem ser preenchidos');
      return;
    }

    const response = yield call(api.post, 'delivery', {
      deliveryman_id,
      recipient_id,
      product,
    });

    if (response) {
      toast.success('Encomenda criada com sucesso');
      yield put(newDeliverySuccess(response.data));
      history.push('/delivery');
    }
  } catch (error) {
    toast.error('Erro ao criar ecomenda verifique os dados');
  }
}

export function* detailsDelivery({ payload }) {
  try {
    const { delivery_id } = payload;

    const response = yield call(api.get, 'delivery-edit', {
      params: {
        delivery_id,
      },
    });
    yield put(detailsDeliverySuccess(response.data));
  } catch (error) {
    toast.error(`Erro ao obter detalhes da encomenda ${error.message}`);
  }
}

export default all([
  takeLatest('@delivery/NEW_DELIVERY_REQUEST', newAddDelivery),
  takeLatest('@delivery/LOAD_REQUEST', loadDeliveries),
  takeLatest('@delivery/SET_DELIVERYID_REQUEST', detailsDelivery),
]);
