import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, MoreOptions, Badge } from './styles';

export function OptionsDelivery() {
  const [visibility, setVisible] = useState(false);

  function handleToogleVisible() {
    setVisible(!visibility);
  }

  return (
    <Container>
      <Badge onClick={handleToogleVisible}>
        <MdMoreHoriz color="#333" size={26} />
      </Badge>
      <MoreOptions visibility={visibility}>
        <div>
          <button type="button">
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
