import React from "react";
import { FoodCardContainer } from "./FoodCard.styled";
import { Container } from "../../App.jsx";
import FoodCards from "./FoodCards";

const SearchResult = ({ data: foods }) => (
  <FoodCardContainer>
    <Container>
      <FoodCards foods={foods} />
    </Container>
  </FoodCardContainer>
);

export default SearchResult;