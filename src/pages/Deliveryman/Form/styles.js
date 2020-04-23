import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 920px;
  margin: 40px auto;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;

  div {
    > span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  div {
    display: flex;
    button {
      display: flex;
      align-items: center;
      border: 0;
      width: 110px;
      color: #fff;
      border-radius: 4px;
      background: #999;
      padding: 8px 15px;
      margin-left: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#999')};
      }

      & + button {
        background: #7159c1;

        &:hover {
          background: ${darken(0.1, '#7159c1')};
          transition: background 0.2s;
        }
      }
    }
  }
`;
export const ContentForm = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 35px 45px;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;

    span {
      font-size: 15px;
      font-weight: bold;
      margin: 0 0 5px;
    }

    input {
      font-size: 15px;
      padding: 10px 15px;
      margin: 5px 0;
    }
  }
`;
