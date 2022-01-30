import React from "react";

function Clock() {
  const element = (
    <div>
      <h1>Witaj świecie!</h1>
      <h2>Aktualny czas: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return <div>{element}</div>;
}

setInterval(Clock, 1000);

export default Clock;
