import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  loadProblemDeliverySuccess,
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

export default all([
  takeLatest('@problem/LOAD_PROBLEMS_DELIVERY_REQUEST', loadProblems),
]);
