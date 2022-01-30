import React from "react";
import Smallblock from "./SmallBlock.jsx";

function BigCard({ item }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="">
        <Smallblock item={item.days} />
        <p>{item.days > 1 ? " dni" : " dzien"}</p>
      </div>
      <div className="">
        <Smallblock item={item.hours} />
        <p>{item.days > 1 ? " godzin" : " godzina"}</p>
      </div>
      <div className="">
        <Smallblock item={item.minutes} />
        <p>{item.days > 1 ? " minut" : "minuta"}</p>
      </div>
      <div className="">
        <Smallblock item={item.seconds} />
        <p>{item.days > 1 ? "sekund" : " sekunda"}</p>
      </div>
    </div>
  );
}

export default BigCard;
