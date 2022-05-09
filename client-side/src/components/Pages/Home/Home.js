import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import Extra from "./Extra/Extra";
import Items from "./Items/Items";
import Suppliers from "./Suppliers/Suppliers";

const Home = () => {
  return (
    <main className="my-5">
      <Container>
        <Banner></Banner>
        <Items></Items>
        <Suppliers></Suppliers>
        <Extra></Extra>
      </Container>
    </main>
  );
};

export default Home;
