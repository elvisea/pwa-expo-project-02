import React, { useState, useEffect } from "react";

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from "./styles";

import data from "../../../server.json";

interface ICategories {
  id: number;
  categorie_url: string;
  title: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    async function loadCategories() {
      setCategories(data.categories);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        {categories.map((item) => (
          <Item key={item.id}>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{item.title}</ItemTitle>
          </Item>
        ))}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
