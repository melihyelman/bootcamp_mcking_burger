import styled from "styled-components";
export const OrderMenu = styled.div`
  height: 270px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #cf8f38;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;
export const OrderMenuList = styled.div`
  display: flex;

  width: 550px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;
export const OrderMenuListInfo = styled.div`
  margin: 0 10px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
