import React from "react";
import { FoodCardStyled } from "./FoodCard.styled";
import { Button } from "../../App.jsx";

const FoodCard = ({ name, image, text, price, BASE_URL }) => (
  <FoodCardStyled>
    <div className="food_image">
      <img src={BASE_URL + image} alt={name} />
    </div>
    <div className="food_info">
      <div className="info">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <Button>${price.toFixed(2)}</Button>
    </div>
  </FoodCardStyled>
);

export default FoodCard;