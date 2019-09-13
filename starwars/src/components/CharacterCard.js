import React from "react";
import "./StarWars.css";

const StarWarsCard = props => {
  return (
    <div>
      <h1>{props.info.name}</h1>
    </div>
  );
};
export default StarWarsCard;
