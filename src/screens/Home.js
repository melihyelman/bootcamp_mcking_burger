import React, { useContext } from "react";
import Burger from "../components/Burger/Burger";
import Order from "../components/Order/Order";
import Layout from "../components/Layout/Layout";
import IngredientsContext from "../context/IngredientsContext";

const Home = () => {
  const { ingredients } = useContext(IngredientsContext);

  return (
    <Layout>
      <Burger ingredients={ingredients} />
      <Order ingredients={ingredients} />
    </Layout>
  );
};

export default Home;
