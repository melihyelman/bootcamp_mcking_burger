import React, { useState } from "react";
import IngredientsContext from "./context/IngredientsContext";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App = () => {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    salad: 0,
    meat: 0,
  });

  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      <Container>
        <Header />
        <Content />
      </Container>
    </IngredientsContext.Provider>
  );
};

export default App;
