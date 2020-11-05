import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em 4em;
  height: 30px;
  background-color: #6f3c11;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;
export const Home = styled.a`
  padding: 20px 20px;
  background-color: #6f3c11;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #8d5c35;
    border-bottom: 2px solid #4da5ba;
  }
`;
