import React from "react";

import Address from "../../components/Address";
import Input from "../../components/Input";
import Coupon from "../../components/Coupon";
import Suggestions from "../../components/Suggestions";
import Promotions from "../../components/Promotions";
import Offers from "../../components/Offers";
import Categories from "../../components/Categories";
import Restaurants from "../../components/Restaurants";

import { Container, Content } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Address />
      <Input placeholder="Oferta ou Restaurante" />
      <Content>
        <Coupon />
        <Suggestions />
        <Promotions />
        <Offers />
        <Categories />
        <Restaurants display />
      </Content>
    </Container>
  );
};

export default Main;
