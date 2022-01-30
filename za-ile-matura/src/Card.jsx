import React from "react";
import Smallblock from "./SmallBlock.jsx";

function Card({ item, text }) {
  return (
    <div>
      <Smallblock item={item} />
      <h1>{text}</h1>
    </div>
  );
}

export default Card;
