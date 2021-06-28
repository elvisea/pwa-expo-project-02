import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import data from "../../../server.json";
import { formattedCurrency } from "../../utils/formatNumber";

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from "./styles";

interface IOffers {
  id: number;
  offer_url: string;
  title: string;
  price: number | string;
  newPrice: number | string;
  // ingredients: string;
  // delivery: string;
  delay: string;
  // icon: string;
}

const Offers: React.FC = () => {
  const [offers, setOffers] = useState<IOffers[]>([]);

  useEffect(() => {
    async function loadOffers() {
      const dataOffers = data.offers.map((offer) => ({
        id: offer.id,
        offer_url: offer.offer_url,
        title: offer.title,
        newPrice: formattedCurrency(Number(offer.newPrice)),
        price: formattedCurrency(Number(offer.price)),
        // ingredients: offer.ingredients,
        // delivery: offer.delivery,
        delay: offer.delay,
        // icon: offer.icon,
      }));

      setOffers(dataOffers);
    }
    loadOffers();
  }, []);

  return (
    <Container>
      <Header>
        <Info>
          <Title>Está com fome?</Title>
          <SubTitle>Pratos com entrega grátis</SubTitle>
        </Info>
      </Header>
      <OfferList horizontal>
        {offers.map((offer) => (
          <Item key={offer.id} onPress={() => {}}>
            <ItemImage source={{ uri: offer.offer_url }} />
            <ItemInfo>
              <ItemTitle>{offer.title}</ItemTitle>
              <ItemPrice>
                <Price>${offer.newPrice}</Price>
                <OldPrice>${offer.price}</OldPrice>
                <MaterialIcons name="local-offer" size={15} color="#000" />
              </ItemPrice>
            </ItemInfo>
          </Item>
        ))}
      </OfferList>
    </Container>
  );
};

export default Offers;
