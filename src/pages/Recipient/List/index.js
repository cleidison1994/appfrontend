import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';

import history from '~/services/history';
import { OptionsRecipient } from '~/components/ActionMenu';
import { Container, Content, ContentHeader, ContentList } from './styles';
import { loadRecipientRequest } from '~/store/modules/recipient/actions';

export default function List() {
  const [textsearch, setTextSearch] = useState('');
  const RecipientData = useSelector((state) => state.recipient.recipients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipientRequest(textsearch));
  }, [dispatch, textsearch]);

  return (
    <Container>
      <Content>
        <span>Gerenciando destinatários</span>
        <ContentHeader>
          <form>
            <MdSearch size={25} color="#333" />
            <input
              placeholder="Buscar por destinatário"
              onChange={(e) => setTextSearch(e.target.value)}
              value={textsearch}
            />
          </form>
          <button type="button" onClick={() => history.push('/recipient-new')}>
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </ContentHeader>
        <ContentList>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>ENDEREÇO</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {RecipientData ? (
              RecipientData.map((recipients) => (
                <tr key={recipients.id}>
                  <td>{recipients.id}</td>
                  <td>{recipients.name}</td>
                  <td>
                    {recipients.street}, {recipients.zip_code},{' '}
                    {recipients.city}- {recipients.state}
                  </td>
                  <td>
                    <OptionsRecipient recipient={recipients} />
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
