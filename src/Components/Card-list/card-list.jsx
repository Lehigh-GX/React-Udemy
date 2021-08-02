import React from "react";
import "./card-list.css";
import Card from "../Card/card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};

export default CardList;
