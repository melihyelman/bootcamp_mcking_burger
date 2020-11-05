import React from "react";

import { BreadTop, BreadBottom, Meat, Cheese, Salad } from "./Burger.styles";

const BurgerIngredient = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case "bread-bottom":
      ingredient = <BreadBottom />;
      break;
    case "bread-top":
      ingredient = <BreadTop />;

      break;
    case "meat":
      ingredient = <Meat />;
      break;
    case "cheese":
      ingredient = <Cheese />;
      break;
    case "salad":
      ingredient = <Salad />;
      break;

    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
