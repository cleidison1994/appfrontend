/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch, MdAdd } from 'react-icons/md';
import { loadProblemDeliveryRequest } from '~/store/modules/problem/actions';
import { OptionsProblem } from '~/components/ActionMenu';
import {
  Container,
  Content,
  ContentHeader,
  ContentList,
  FadeDelivery,
  DetailsDelivery,
} from './styles';

export default function List() {
  const dispatch = useDispatch();
  const problemsData = useSelector((state) => state.problem.problems);

  useEffect(() => {
    async function loadProblemsDelivery() {
      dispatch(loadProblemDeliveryRequest());
    }
    loadProblemsDelivery();
  }, [dispatch]);

  return (
    <>
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
              {problemsData ? (
                problemsData.map((problem) => (
                  <tr key={problem.problem.id}>
                    <td>{problem.problem.id}</td>
                    <td>{problem.description}</td>
                    <td>
                      <OptionsProblem />
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
      <FadeDelivery visible={false}>
        <DetailsDelivery>
          <div>
            <strong>Informações sobre a encomenda</strong>
          </div>
        </DetailsDelivery>
      </FadeDelivery>
    </>
  );
}
