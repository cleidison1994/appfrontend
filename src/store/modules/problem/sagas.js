import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  loadProblemDeliverySuccess,
  loadDetailsProblemSucces,
  cancelDeliverySuccess,
  failureProblem,
} from '~/store/modules/problem/actions';

export function* loadProblems() {
  try {
    const response = yield call(api.get, 'problem/delivery');

    if (response.data) {
      yield put(loadProblemDeliverySuccess(response.data));
    }
  } catch (error) {
    yield put(failureProblem());
    toast.error('Erro ao obter dados');
  }
}
export function* loadDetails({ payload }) {
  try {
    const { delivery_id } = payload;

    if (delivery_id) {
      yield put(loadDetailsProblemSucces());
    }
  } catch (error) {
    yield put(failureProblem(error.message));
    toast.error('Erro ao obter problemas da encomenda.');
  }
}
export function* cancelDelivery({ payload }) {
  try {
    const { delivery } = payload;

    const response = yield call(api.put, `problem/${delivery}/cancel-delivery`);
    if (response.data) {
      yield put(cancelDeliverySuccess());
      toast.success('Encomenda cancelada');
    }
  } catch (error) {
    yield put(failureProblem(error.message));
    toast.error(
      'Erro ao cancelar encomenda!. verifique se já não está cancelada'
    );
  }
}

export default all([
  takeLatest('@problem/LOAD_PROBLEMS_DELIVERY_REQUEST', loadProblems),
  takeLatest('@problem/LOAD_DETAILS_PROBLEM_REQUEST', loadDetails),
  takeLatest('@problem/CANCEL_DELIVERY_REQUEST', cancelDelivery),
]);
