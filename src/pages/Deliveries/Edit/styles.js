import styled from 'styled-components';
import Async from 'react-select/async';

export const Container = styled.div`
  max-width: 1050px;
  margin: 50px auto;
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: 25px;
    font-weight: bold;
  }
  div {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 110px;
      border: 0;
      background: #999;
      border-radius: 4px;
      margin-left: 20px;
      color: #fff;
      padding: 5px 10px;

      & + button {
        background: #7159c1;
      }
    }
  }
`;

export const NewDeliveryForm = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 15px;
  padding: 20px 35px;
  border-radius: 4px;

  span {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Select = styled(Async)`
  margin: 10px 0;
  width: 480px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    padding: 0 10px;
    border: 0.5 solid #333;
    font-size: 16px;
    margin: 10px 0;
  }
`;
