import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';
import history from '~/services/history';
import { Container, MoreOptions, Badge } from './styles';

import {
  detailsDeliveryRequest,
  editDeliveryRequest,
  deleteDeliveryRequest,
} from '~/store/modules/delivery/actions';

import {
  loadEditDeliveryManRequest,
  DeleteDeliveryManRequest,
} from '~/store/modules/deliveryman/actions';

import {
  loadeditRecipientrRequest,
  deletetRecipientRequest,
} from '~/store/modules/recipient/actions';

import {
  loadDetailsProblemRequest,
  cancelDeliveryRequest,
} from '~/store/modules/problem/actions';

export function OptionsDelivery({ deliveries }) {
  const dispatch = useDispatch();
  const [visibility, setVisible] = useState(false);
  const { id } = deliveries;

  function handleToogleVisible() {
    setVisible(!visibility);
  }
  function handleDetailsDelivery() {
    dispatch(detailsDeliveryRequest(id));
  }
  function handleEditDelivery() {
    dispatch(editDeliveryRequest(id));
    history.push('/delivery-edit');
  }
  function handleDeleteDelivery() {
    const verify = window.confirm(
      'Você realmente deseja cancelar esta encomenda?'
    );
    if (verify) {
      dispatch(deleteDeliveryRequest(id));
      history.push('/delivery');
    }
  }

  return (
    <Container>
      <Badge onClick={handleToogleVisible}>
        <MdMoreHoriz color="#333" size={26} />
      </Badge>
      <MoreOptions visibility={visibility}>
        <div>
          <button type="button" onClick={handleDetailsDelivery}>
            <MdVisibility size={16} color="#8E58E8" />
            <span>Visualizar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleEditDelivery}>
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDeleteDelivery}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}

export function OptionsDeliveryMan({ deliveryman }) {
  const [visibility, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = deliveryman;

  function handleToogleVisible() {
    setVisible(!visibility);
  }
  function handleLoadEdit() {
    dispatch(loadEditDeliveryManRequest(id));
    history.push('/deliveryman-edit');
  }
  function handleDeleteDeliveryMan() {
    const verify = window.confirm(
      'Você realmente deseja cancelar este entregador?'
    );
    if (verify) {
      dispatch(DeleteDeliveryManRequest(id));
      history.push('/deliveryman');
    }
  }
  return (
    <Container>
      <Badge onClick={handleToogleVisible}>
        <MdMoreHoriz color="#333" size={26} />
      </Badge>
      <MoreOptions visibility={visibility}>
        <div>
          <button type="button" onClick={handleLoadEdit}>
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDeleteDeliveryMan}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}

export function OptionsRecipient({ recipient }) {
  const [visibility, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = recipient;

  function handleToogleVisible() {
    setVisible(!visibility);
  }
  function handleLoadEdit() {
    dispatch(loadeditRecipientrRequest(id));
    history.push('/recipient-edit');
  }
  function handleDeleteDeliveryMan() {
    const verify = window.confirm(
      'Você realmente deseja deletar este endereço?'
    );
    if (verify) {
      dispatch(deletetRecipientRequest(id));
    }
  }
  return (
    <Container>
      <Badge onClick={handleToogleVisible}>
        <MdMoreHoriz color="#333" size={26} />
      </Badge>
      <MoreOptions visibility={visibility}>
        <div>
          <button type="button" onClick={handleLoadEdit}>
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDeleteDeliveryMan}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}

export function OptionsProblem({ problem }) {
  const [visibility, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { delivery_problem } = problem;

  function handleToogleVisible() {
    setVisible(!visibility);
  }
  function handleLoadDetails() {
    dispatch(loadDetailsProblemRequest(delivery_problem.id));
  }
  function handleCancel() {
    dispatch(cancelDeliveryRequest(delivery_problem.id));
  }

  return (
    <Container>
      <Badge onClick={handleToogleVisible}>
        <MdMoreHoriz color="#333" size={26} />
      </Badge>
      <MoreOptions visibility={visibility}>
        <div>
          <button type="button" onClick={handleLoadDetails}>
            <MdVisibility size={16} color="#4D85EE" />
            <span>Visualizar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Cancelar</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}

OptionsDelivery.propTypes = {
  deliveries: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
OptionsDeliveryMan.propTypes = {
  deliveryman: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

OptionsRecipient.propTypes = {
  recipient: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
OptionsProblem.propTypes = {
  problem: PropTypes.shape({
    delivery_problem: PropTypes.object,
    id: PropTypes.number,
  }).isRequired,
};
