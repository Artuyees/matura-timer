import React, { useState, useEffect } from "react";
import BigCard from "./bigCard";
import Card from "./card";

function Clock() {
  const [year] = useState(new Date().getFullYear());
  const calcTimeLeft = () => {
    let year = new Date().getFullYear();
    let diff = +new Date(`05/04/${year}`) - +new Date();

    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        millis: diff,
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      year += 1;
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const element = (
    <div className="flex flex-col gap-4 text-center mt-8">
      <h1 className="text-4xl">Do matury {year} pozostalo: </h1>
      <BigCard item={timeLeft} />
      <h1 className="text-4xl">Lub:</h1>
      <div className="flex flex-col gap-4">
        <Card
          item={Math.floor(timeLeft.millis / (1000 * 60 * 60))}
          text="Godzin"
        />
        <Card item={Math.floor(timeLeft.millis / (1000 * 60))} text="minut" />
        <Card item={Math.floor(timeLeft.millis / 1000)} text="sekund" />
      </div>
    </div>
  );
  return element;
}
export default Clock;
