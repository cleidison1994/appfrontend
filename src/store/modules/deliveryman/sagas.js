import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  loadSearchDeliveryManSuccess,
  failureDeliveryman,
  addNewDeliveryManRequest,
} from './actions';

export function* loadSearchDeliveryman({ payload }) {
  try {
    const { textsearch } = payload;
    const response = yield call(api.get, 'deliveryman', {
      params: {
        textsearch,
      },
    });
    if (response.data) {
      yield put(loadSearchDeliveryManSuccess(response.data));
    }
  } catch (error) {
    yield put(failureDeliveryman());
    toast.error('Nenhum registro encontrado!');
  }
}

export function* addNewDeliveryMan({ payload }) {
  try {
    const { deliveryman } = payload;

    const response = yield call(api.post, 'deliveryman', deliveryman);

    if (response.data) {
      toast.success('Entregador cadastrado com sucesso!');
      yield put(addNewDeliveryManRequest(response.data));
    }
  } catch (error) {
    yield put(failureDeliveryman());

    toast.error(`Ocorreu um erro verfique os campos! ${error.message}`);
  }
}

export default all([
  takeLatest(
    '@deliveryman/LOAD_SEARCH_DELIVERYMAN_REQUEST',
    loadSearchDeliveryman
  ),
  takeLatest('@deliveryman/ADDNEW_DELIVERYMAN_REQUEST', addNewDeliveryMan),
]);
