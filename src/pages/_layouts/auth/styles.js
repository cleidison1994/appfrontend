import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  img {
    margin: 30px 0 0 0;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px;

    input {
      background: #fff;
      color: #333;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }
    strong {
      text-align: left;
      margin: 10px 0;
      font-style: normal;
      color: #333;
    }

    span {
      color: #f64c75;
      align-self: flex-end;
    }

    button {
      background: #7159c1;
      color: #fff;
      height: 44px;
      padding: 0 15px;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      margin: 10px 0 35px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#7159c1')};
      }
    }
  }
`;
