import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import history from '~/services/history';
import { Container, Content, ContentHeader, ContentList } from './styles';

import { OptionsDeliveryMan } from '~/components/ActionMenu';
import { loadSearchDeliveryManRequest } from '~/store/modules/deliveryman/actions';

export default function List() {
  const deliverymanList = useSelector((state) => state.deliveryman.deliveryman);
  const [textsearch, setTextSearch] = useState('');
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(loadSearchDeliveryManRequest(textsearch));
  }, [textsearch, distpatch]);

  return (
    <Container>
      <Content>
        <span>Gerenciando entregadores</span>
        <ContentHeader>
          <form>
            <MdSearch size={25} color="#333" />
            <input
              placeholder="Buscar por entregadores"
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </form>
          <button
            type="button"
            onClick={() => history.push('/deliveryman-new')}
          >
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </ContentHeader>
        <ContentList>
          <thead>
            <tr>
              <th>ID</th>
              <th>FOTO</th>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {deliverymanList ? (
              deliverymanList.map((deliveryman) => (
                <tr key={deliveryman.id}>
                  <td>{deliveryman.id}</td>
                  <td>
                    <div>
                      <img
                        src={
                          deliveryman.deliveryman_avatar
                            ? deliveryman.deliveryman_avatar.url
                            : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }
                        alt={deliveryman.id}
                      />
                    </div>
                  </td>
                  <td>{deliveryman.name} </td>
                  <td>{deliveryman.email} </td>
                  <td>
                    <OptionsDeliveryMan deliveryman={deliveryman} />
                  </td>
                </tr>
              ))
            ) : (
              <span>Carregando...</span>
            )}
          </tbody>
        </ContentList>
      </Content>
    </Container>
  );
}
