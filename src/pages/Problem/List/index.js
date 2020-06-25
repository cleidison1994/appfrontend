/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProblemDeliveryRequest } from '~/store/modules/problem/actions';
import { OptionsProblem } from '~/components/ActionMenu';
import { Container, Content, ContentList, Fade, DetailsFade } from './styles';

export default function List() {
  const dispatch = useDispatch();
  const problemsData = useSelector((state) => state.problem.problems);
  const detailsProblem = useSelector((state) => state.problem.delivery);
  const visible = useSelector((state) => state.problem.fadebord);
  console.tron.log(detailsProblem);
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
                  <tr key={problem.delivery_problem.id}>
                    <td>{problem.delivery_problem.id}</td>
                    <td>{problem.description}</td>
                    <td>
                      <OptionsProblem problem={problem} />
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
      <Fade visible={visible}>
        <DetailsFade>
          <div>
            <strong>Informações sobre o problema da encomenda</strong>
          </div>
          <div>
            <span>Problemas :</span>
            <p>{detailsProblem ? detailsProblem.description : ''}</p>
            <span>
              Data: {detailsProblem ? detailsProblem.createdAt : '00/00/0000'}
            </span>
          </div>
        </DetailsFade>
      </Fade>
    </>
  );
}
