import React, { useContext } from "react";
import Burger from "../components/Burger/Burger";
import Layout from "../components/Layout/Layout";
import Messages from "../components/Messages/Messages";
import IngredientsContext from "../context/IngredientsContext";

const OrderCheck = () => {
  const { ingredients } = useContext(IngredientsContext);

  return (
    <Layout>
      <Messages>Your order has been placed successfully</Messages>
      <Burger ingredients={ingredients}></Burger>)
    </Layout>
  );
};

export default OrderCheck;
