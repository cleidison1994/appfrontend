import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import {
  loadSearchDeliveryManSuccess,
  failureDeliveryman,
  addNewDeliveryManSuccess,
  loadEditDeliveryManSuccess,
  avatarDeliveryManSuccess,
  EditDeliveryManSuccess,
  DeleteDeliveryManSuccess,
} from './actions';

export function* avatarDeliveryMan() {
  try {
    yield put(avatarDeliveryManSuccess());
  } catch (error) {
    put(failureDeliveryman());
    toast.error('Erro ao carregar imagem!');
  }
}

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
    let deliveryman = {};
    const { name, email, ...rest } = payload.deliveryman;
    deliveryman = { name, email };
    if (rest.avatar_id == null) {
      deliveryman = { ...deliveryman };
    } else {
      deliveryman = { ...deliveryman, avatar_id: rest.avatar_id };
    }

    const response = yield call(api.post, 'deliveryman', deliveryman);

    if (response) {
      toast.success('Entregador cadastrado com sucesso!');
      yield put(addNewDeliveryManSuccess(response.data));
      history.push('/deliveryman');
    }
  } catch (error) {
    yield put(failureDeliveryman());
    toast.error(`Ocorreu um erro verfique os campos! ${error.message}`);
  }
}
export function* loadEditDeliveryMan() {
  try {
    yield put(loadEditDeliveryManSuccess());
  } catch (erro) {
    put(failureDeliveryman());
    toast.error('Erro ao obter dados do entregador!');
  }
}
export function* editDeliveryMan({ payload }) {
  try {
    const { id, name, email, avatar_id } = payload.deliveryman;
    const data = { id, name, email, avatar_id };

    const response = yield call(api.put, `deliveryman/${id}`, data);

    if (response) {
      yield put(EditDeliveryManSuccess());
      toast.success('Entregador alterado com sucesso!');
      history.push('/deliveryman');
    }
  } catch (erro) {
    yield put(failureDeliveryman());
    toast.error('Erro ao editar entregador!');
  }
}
export function* deleteDeliveryMan({ payload }) {
  try {
    const { deliveryman } = payload;
    const response = yield call(api.delete, `deliveryman/${deliveryman}`);
    if (response) {
      yield put(DeleteDeliveryManSuccess());
      toast.success('Entregador deletado!');
    }
  } catch (error) {
    yield put(failureDeliveryman());
    toast.error(
      `Falha ao deletar!. verfique se este entregador está vinculado á uma entrega`
    );
  }
}

export default all([
  takeLatest(
    '@deliveryman/LOAD_SEARCH_DELIVERYMAN_REQUEST',
    loadSearchDeliveryman
  ),
  takeLatest('@deliveryman/ADDNEW_DELIVERYMAN_REQUEST', addNewDeliveryMan),
  takeLatest('@deliveryman/LOADEDIT_DELIVERYMAN_REQUEST', loadEditDeliveryMan),
  takeLatest('@deliveryman/AVATAR_DELIVERYMAN_REQUEST', avatarDeliveryMan),
  takeLatest('@deliveryman/EDIT_DELIVERYMAN_REQUEST', editDeliveryMan),
  takeLatest('@deliveryman/DELETE_DELIVERYMAN_REQUEST', deleteDeliveryMan),
]);
