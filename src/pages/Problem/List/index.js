import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Container, Content, ContentHeader, ContentList } from './styles';

export default function List() {
  return (
    <Container>
      <Content>
        <span>Gerenciando problemas</span>
        <ContentHeader>
          <form>
            <MdSearch size={25} color="#333" />
            <input placeholder="Buscar por encomendas" />
          </form>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </ContentHeader>
        <ContentList>
          <thead>
            <tr>
              <th>ENCOMENDA</th>
              <th>PROBLEMA</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>teste teste teste tese</td>
              <td>teste</td>
            </tr>
          </tbody>
        </ContentList>
      </Content>
    </Container>
  );
}
