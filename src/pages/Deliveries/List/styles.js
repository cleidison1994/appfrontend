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
    font-size: 14px;
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
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
`;
export const FadeDelivery = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.visible ? 'flex' : 'none')} !important;
  justify-content: center;
`;
export const ButtonClose = styled.div`
  padding: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

  button {
    background: none;
    border: 0;
  }
`;

export const DetailsDelivery = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 400px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & + div {
      border-top: 0.5px solid #eee;
      padding-top: 15px;
    }
    strong {
      font-size: 16px;
    }
    span {
      line-height: 20px;
    }
  }
  p {
    color: #333;
    font-size: 15px;
    span {
      font-weight: bold;
      color: #333;
      margin-right: 10px;
    }
  }
  img {
    margin: 10px 0 0;
    align-self: center;
    height: 130px;
    width: 360px;
  }
`;
export const TableLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #7159c1;
    font-size: 20px;
  }
`;
