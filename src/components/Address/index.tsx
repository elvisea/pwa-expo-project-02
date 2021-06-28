import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Location, AddressButton } from "./styles";

const Address: React.FC = () => {
  return (
    <Container>
      <AddressButton>
        <Location>Rua João Ferreira, 81</Location>
        <MaterialIcons name="keyboard-arrow-down" size={25} color="#ff6666" />
      </AddressButton>
    </Container>
  );
};

export default Address;
