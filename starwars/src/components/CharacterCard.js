import React from "react";
import "./StarWars.css";

const StarWarsCard = props => {
  return (
    <div className="charCard">
      <div className="skew">
        <h1 className="charName">{props.info.name}</h1>
        <p>
          {props.info.name} was born in the year {props.info.birth_year}
        </p>
        <p>
          {(() => {
            switch (props.info.gender) {
              case "male":
                return (
                  <p>
                    He is {props.info.height} units tall and weighs{" "}
                    {props.info.mass} units
                  </p>
                );
              case "female":
                return (
                  <p>
                    She is {props.info.height} units tall and weighs... well
                    that would be rude to say
                  </p>
                );
              default:
                return (
                  <p>
                    It is {props.info.height} units tall and weighs{" "}
                    {props.info.mass} units
                  </p>
                );
            }
          })()}
        </p>
      </div>
    </div>
  );
};
export default StarWarsCard;
