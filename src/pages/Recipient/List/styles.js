import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1050px;
  margin: 50px auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > span {
    font-size: 25px;
    font-weight: bold;
  }
`;
export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0;

  form {
    width: 330px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 4px;

    input {
      width: 100%;
      border: 0;
      padding: 0 10px;
    }
  }
  button {
    border: 0;
    background: #7159c1;
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0 8px;
    height: 35px;
  }
`;
export const ContentList = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-collapse: separate !important;
  border-spacing: 0 20px !important;

  thead th {
    text-align: left;
    color: #333;
    padding: 0 10px;

    &:last-child {
      text-align: center;
    }
  }
  tbody td {
    background: #fff;
    height: 50px;
    font-size: 15px;
    padding: 0 10px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      text-align: right;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    div {
      display: flex;
      align-items: center;

      img {
        max-width: 45px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
`;
