import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import history from '~/services/history';

import { Container, Content, ContentHeader, ContentList } from './styles';

import { loadDeliveryRequest } from '~/store/modules/delivery/actions';
import { OptionsDelivery } from '~/components/ActionMenu';
import {
  ActionStarted,
  ActionCanceled,
  ActionDelivered,
  ActionPending,
} from '~/components/Status';

export default function List() {
  const [textsearch, setTextSearch] = useState('');

  const deliveries = useSelector((state) => state.delivery.deliveries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDeliveryRequest(textsearch));
  }, [dispatch, textsearch]);

  return (
    <Container>
      <Content>
        <span>Gerenciando encomendas</span>
        <ContentHeader>
          <form>
            <MdSearch size={25} color="#333" />
            <input
              placeholder="Buscar por encomendas"
              value={textsearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </form>
          <button type="button" onClick={() => history.push('/delivery-new')}>
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </ContentHeader>
        <ContentList>
          <thead>
            <tr>
              <th>ID</th>
              <th>PRODUTO</th>
              <th>DESTINATÁRIO</th>
              <th>ENTREGADOR</th>
              <th>CIDADE</th>
              <th>ESTADO</th>
              <th>STATUS</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td>{delivery.id}</td>
                <td>{delivery.product}</td>
                <td>{delivery.recipients.name}</td>
                <td>
                  <div>
                    <img
                      src="https://api.adorable.io/avatars/50/abott@adorable.png"
                      alt="imagem"
                    />
                    <span>{delivery.deliveryman.name}</span>
                  </div>
                </td>
                <td>{delivery.recipients.city}</td>
                <td>{delivery.recipients.state}</td>
                <td>
                  {delivery.start_date &&
                  !delivery.canceled_at &&
                  !delivery.end_date ? (
                    <ActionStarted />
                  ) : null}
                  {!delivery.canceled_at &&
                  delivery.end_date &&
                  delivery.start_date ? (
                    <ActionDelivered />
                  ) : null}
                  {!delivery.canceled_at &&
                  !delivery.end_date &&
                  !delivery.start_date ? (
                    <ActionPending />
                  ) : null}
                  {delivery.canceled_at ? <ActionCanceled /> : null}
                </td>
                <td>
                  <OptionsDelivery />
                </td>
              </tr>
            ))}
          </tbody>
        </ContentList>
      </Content>
    </Container>
  );
}
