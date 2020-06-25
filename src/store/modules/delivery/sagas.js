import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadDeliverySuccess,
  loadDeliveryRequest,
  failureDelivery,
  newDeliverySuccess,
  detailsDeliverySuccess,
  deleteDeliverySuccess,
  editDeliverySuccess,
  fadeboardDeliverySuccess,
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
    yield put(failureDelivery());
  }
}
export function* newAddDelivery({ payload }) {
  try {
    const { deliveryman_id, recipient_id, product } = payload;

    if (!(deliveryman_id || recipient_id, product || product)) {
      toast.error('Verifique os campos todos devem ser preenchidos');
      yield put(failureDelivery());
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
    yield put(failureDelivery());
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
    toast.error(`Erro ao obter detalhes da encomenda`);
  }
}

export function* editDelivery({ payload }) {
  try {
    const { delivery } = payload;

    yield put(editDeliverySuccess(delivery));
  } catch (error) {
    toast.error('Errro ao editar encomenda verifique!');
  }
}

export function* deleteDelivery({ payload }) {
  try {
    const { delivery } = payload;
    const response = yield call(api.delete, `delivery/${delivery}`);

    if (response.data) {
      yield put(deleteDeliverySuccess());
      yield put(loadDeliveryRequest());
      toast.success('Encomenda removida!');
    }
  } catch (error) {
    yield put(failureDelivery());
    yield put(loadDeliverySuccess());
    toast.error(`Erro ao remover encomenda !`);
  }
}
export function* closeFadeboard() {
  try {
    yield put(fadeboardDeliverySuccess());
  } catch (err) {
    toast.error(err);
  }
}
export default all([
  takeLatest('@delivery/NEW_DELIVERY_REQUEST', newAddDelivery),
  takeLatest('@delivery/LOAD_REQUEST', loadDeliveries),
  takeLatest('@delivery/SET_DELIVERYID_REQUEST', detailsDelivery),
  takeLatest('@delivery/DELETE_DELIVERY_REQUEST', deleteDelivery),
  takeLatest('@delivery/EDIT_DELIVERY_REQUEST', editDelivery),
  takeLatest('@delivery/FADEBOARD_REQUEST', closeFadeboard),
]);
