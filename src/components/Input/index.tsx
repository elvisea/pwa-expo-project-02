import React from "react";
import { TextInputProps } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <Container>
      <MaterialIcons name="search" size={25} color="#ff6666" />
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

export default Input;
