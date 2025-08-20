import React from "react";
import FoodCard from "./FoodCard";
import { FoodCardsWrapper } from "./FoodCard.styled";
import { BASE_URL } from "../../App.jsx";

const FoodCards = ({ foods }) => (
  <FoodCardsWrapper>
    {foods?.map((food) => (
      <FoodCard key={food.name} {...food} BASE_URL={BASE_URL} />
    ))}
  </FoodCardsWrapper>
);

export default FoodCards;