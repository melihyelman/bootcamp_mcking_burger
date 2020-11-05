import React from "react";

import { Hamburger } from "./Burger.styles";

import BurgerIngredient from "./BurgerIngredient";

const Burger = ({ ingredients }) => {
  let getIngredients = Object.keys(ingredients)
    .map((ingredientKey) => {
      return [...Array(ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (getIngredients.length === 0) {
    getIngredients = (
      <p style={{ textAlign: "center" }}>
        <b>Please Start Adding Ingredients</b>
      </p>
    );
  }

  return (
    <Hamburger>
      <BurgerIngredient type="bread-top" />
      {getIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Hamburger>
  );
};

export default Burger;
