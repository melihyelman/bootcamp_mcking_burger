import React from "react";

import { useHistory } from "react-router-dom";
import { Wrapper, Title, Home } from "./Header.styles";

const Header = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Title>Mcking Burger</Title>
      <Home onClick={() => history.push("/")}>Home</Home>
    </Wrapper>
  );
};

export default Header;
