import React from "react";
import Hero from "./Hero";
import DeliveryApp from "./DeliveryApp";
import TopPicks from "./TopPicks";

const Home = ({ handleAdd, removeItem }) => {
  return (
    <>
      <Hero />
      <DeliveryApp />
      <TopPicks handleAdd={handleAdd} removeItem={removeItem} />
    </>
  );
};

export default Home;
