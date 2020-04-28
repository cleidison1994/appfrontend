import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  > span {
    font-size: 24px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 4px;
      padding: 5px 5px;
      margin-left: 20px;
      width: 125px;
      height: 35px;
      color: #fff;
      background: #999;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#999')};
      }

      & + button {
        background: #7159c1;

        &:hover {
          background: ${darken(0.1, '#7159c1')};
        }
      }
    }
  }
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 30px 30px;
  border-radius: 4px;

  input {
    height: 44px;
    padding: 0 15px;
    font-size: 15px;
  }
  span {
    margin: 10px 0;
    font-size: 14px;
    font-weight: bold;
  }
  .Name {
    display: flex;
    flex-direction: column;
  }
  div.location {
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }
    div.Street {
      min-width: 55%;
      & + div {
        max-width: 15%;
        & + div {
          max-width: 25%;
        }
      }
    }
  }
  div.place {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      min-width: 32%;
    }
  }
`;
