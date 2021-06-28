import React, { useState, useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Distance,
  Delay,
} from "./styles";

import data from "../../../server.json";
import { ViewProps } from "react-native";

interface IRestaurants {
  id: number;
  restaurant_url: string;
  title: string;
  star: number;
  distance: string;
  time: string;
}

interface IViewProps extends ViewProps {
  display: boolean;
}

const Restaurants: React.FC<IViewProps> = ({ display }) => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      setRestaurants(data.restaurants);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
      <Header display={display}>
        <Title>Restaurantes</Title>
      </Header>

      <RestaurantList>
        {restaurants.map((item) => (
          <Item key={item.id}>
            <ItemImage source={{ uri: item.restaurant_url }} />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>
                <MaterialIcons name="star" size={20} color="#ff7b00" />
                <Star>{item.star ? item.star : "Novo!"}</Star>
                <Distance>{item.distance}</Distance>
              </ItemDescription>
              <Delay>{item.time}</Delay>
            </ItemInfo>
          </Item>
        ))}
      </RestaurantList>
    </Container>
  );
};

export default Restaurants;
