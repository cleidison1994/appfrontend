import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 188px;
      width: 188px;
      border-radius: 50%;
      border: 5px thick #333;
      background: #fff;
    }

    input {
      display: none;
    }
  }
`;
