import React from "react";

const IngredientsContext = React.createContext({
  ingredients: [],
  setIngredients: (newIngredient) => {},
});

export default IngredientsContext;
