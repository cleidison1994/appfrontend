import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Container, Content, ContentHeader, ContentList } from './styles';

export default function List() {
  return (
    <Container>
      <Content>
        <span>Gerenciando destinatários</span>
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
            <tr>
              <td>2</td>
              <td>teste teste teste tese</td>
              <td>
                <div>
                  <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt="imagem"
                  />
                  <span>Nome do entregador</span>
                </div>
              </td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
          </tbody>
        </ContentList>
      </Content>
    </Container>
  );
}
