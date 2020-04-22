import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, MoreOptions, Badge } from './styles';

import { detailsDeliveryRequest } from '~/store/modules/delivery/actions';

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
          <button type="button">
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button">
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}
