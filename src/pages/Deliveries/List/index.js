/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch, MdAdd, MdClose } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import history from '~/services/history';

import {
  Container,
  Content,
  ContentHeader,
  ContentList,
  FadeDelivery,
  ButtonClose,
  DetailsDelivery,
  TableLoading,
} from './styles';

import {
  loadDeliveryRequest,
  fadeboardDeliveryRequest,
} from '~/store/modules/delivery/actions';
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
  const fadebord = useSelector((state) => state.delivery.fadebord);
  const loading = useSelector((state) => state.delivery.loading);
  const deliveryDetails = useSelector((state) => state.delivery.delivery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDeliveryRequest(textsearch));
  }, [dispatch, textsearch]);
  const formattedDate = (fdate) =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

  return (
    <>
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
          {loading ? (
            <TableLoading>
              <span>CARREGANDO...</span>
            </TableLoading>
          ) : (
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
                {deliveries ? (
                  deliveries.map((delivery) => (
                    <tr key={delivery.id}>
                      <td>{delivery.id}</td>
                      <td>{delivery.product}</td>
                      <td>{delivery.recipients.name}</td>
                      <td>
                        <div>
                          <img
                            src={
                              delivery.deliveryman.deliveryman_avatar
                                ? delivery.deliveryman.deliveryman_avatar.url
                                : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
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
                        <OptionsDelivery deliveries={delivery} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <span>Nenhuma encomenda cadastrada!</span>
                )}
              </tbody>
            </ContentList>
          )}
        </Content>
      </Container>
      <FadeDelivery visible={fadebord}>
        <ButtonClose>
          <button
            type="button"
            onClick={() => dispatch(fadeboardDeliveryRequest())}
          >
            <MdClose size={30} color="#fff" />
          </button>
        </ButtonClose>
        <DetailsDelivery>
          <div>
            <strong>Informações sobre a encomenda</strong>
            <span>
              {deliveryDetails
                ? deliveryDetails.recipients.street
                : 'nenhuma informação'}
            </span>
            <span>
              {deliveryDetails
                ? deliveryDetails.recipients.state
                : 'nenhuma informação'}
            </span>
            <span>
              {deliveryDetails
                ? deliveryDetails.recipients.city
                : 'nenhuma informação'}
            </span>
            <span>
              {deliveryDetails
                ? deliveryDetails.recipients.zip_code
                : 'nenhuma informação'}
            </span>
          </div>
          <div>
            <strong>Datas</strong>
            <p>
              {deliveryDetails ? (
                deliveryDetails.start_date ? (
                  <span>RETIRADO</span>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
              {deliveryDetails
                ? formattedDate(deliveryDetails.start_date)
                : '00/00/0000'}
            </p>
            <p>
              {deliveryDetails ? (
                deliveryDetails.end_date ? (
                  <span>ENTREGUE</span>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
              {deliveryDetails
                ? formattedDate(deliveryDetails.end_date)
                : '00/00/0000'}
            </p>
            <p>
              {deliveryDetails ? (
                deliveryDetails.canceled_at ? (
                  <span>CANCELADO</span>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
              {deliveryDetails
                ? formattedDate(deliveryDetails.canceled_at)
                : '00/00/0000'}
            </p>
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            <img
              src={
                deliveryDetails
                  ? deliveryDetails.signature
                    ? deliveryDetails.signature.url
                    : 'https://api.adorable.io/avatars/80/abott@adorable.png'
                  : ''
              }
              alt="signature"
            />
          </div>
        </DetailsDelivery>
      </FadeDelivery>
    </>
  );
}
