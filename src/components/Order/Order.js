import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { OrderMenu, OrderMenuList, OrderMenuListInfo } from "./Order.styles";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import IngredientsContext from "../../context/IngredientsContext";

const INGREDIENT_UNIT_PRICES = {
  cheese: 0.5,
  salad: 0.4,
  meat: 1.3,
};

const Order = ({ ingredients }) => {
  const history = useHistory();

  const { setIngredients } = useContext(IngredientsContext);
  const addOrRemoveIngredient = (action, ingredient) => {
    let stateValue = ingredients[ingredient];

    if (action === "add") {
      stateValue++;
    } else {
      stateValue--;
    }
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    }));
  };

  const getTotalPrice = () => {
    let total = 4;
    Object.entries(ingredients).forEach(([name, amount], index) => {
      if (name === Object.keys(INGREDIENT_UNIT_PRICES)[index]) {
        total += amount * INGREDIENT_UNIT_PRICES[name];
      }
    });
    return total.toFixed(2);
  };

  return (
    <OrderMenu>
      <h3>
        Total Price : <b>${getTotalPrice()}</b>
      </h3>
      {Object.entries(ingredients).map(([name, amount]) => (
        <OrderMenuList key={name}>
          <OrderMenuListInfo>
            <b>
              <span>{name}</span>
            </b>
            <b>
              <span>( ${INGREDIENT_UNIT_PRICES[name]}):</span>
            </b>
          </OrderMenuListInfo>
          <Counter
            value={amount}
            onIncrement={() => addOrRemoveIngredient("add", `${name}`)}
            onDecrement={() => addOrRemoveIngredient("remove", `${name}`)}
          />
          <OrderMenuListInfo>
            <span>Total Price :</span>
            <span>
              <b>$ {(amount * INGREDIENT_UNIT_PRICES[name]).toFixed(2)}</b>
            </span>
          </OrderMenuListInfo>
        </OrderMenuList>
      ))}
      <Button
        text="ORDER"
        color="#97800D"
        bgColor="#DBD646"
        onClick={() => history.push("/ordercheck")}
        disabled={getTotalPrice() === "4.00" ? true : false}
      />
    </OrderMenu>
  );
};

export default Order;
