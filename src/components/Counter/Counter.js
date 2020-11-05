import React from "react";
import Button from "../Button/Button";
import { Wrapper, Value } from "../Counter/Counter.styles";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <Wrapper>
      <Button text="-" color="#fff" bgColor="#AC9981" onClick={onDecrement} />
      <Value>{value}</Value>
      <Button text="+" color="#fff" bgColor="#8D5F23" onClick={onIncrement} />
    </Wrapper>
  );
};

export default Counter;
